const fs = require('fs');
const path = require('path');

let configFile;

module.exports = {
	description: 'keeps watching the config file in case the config is changed to an invalid state',
	command: 'rollup -cw',
	before() {
		configFile = path.resolve(__dirname, 'rollup.config.js');
		fs.writeFileSync(
			configFile,
			'export default {\n' +
				'\tinput: "main.js",\n' +
				'\toutput: {\n' +
				'\t\tfile: "_actual/main1.js",\n' +
				'\t\tformat: "es"\n' +
				'\t}\n' +
				'};'
		);
	},
	after() {
		// synchronous sometimes does not seem to work, probably because the watch is not yet removed properly
		setTimeout(() => fs.unlinkSync(configFile), 300);
	},
	abortOnStderr(data) {
		if (data.includes(`created _actual${path.sep}main1.js`)) {
			fs.writeFileSync(configFile, 'throw new Error("Config contains errors");');
			return false;
		}
		if (data.includes('Config contains errors')) {
			setTimeout(() => {
				fs.writeFileSync(
					configFile,
					'export default {\n' +
						'\tinput: "main.js",\n' +
						'\toutput: {\n' +
						'\t\tfile: "_actual/main2.js",\n' +
						'\t\tformat: "es"\n' +
						'\t}\n' +
						'};'
				);
			}, 400);
			return false;
		}
		if (data.includes(`created _actual${path.sep}main2.js`)) {
			return true;
		}
	}
};
