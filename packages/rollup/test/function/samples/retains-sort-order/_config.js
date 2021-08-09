const assert = require('assert');

module.exports = {
	description: 'sorts statements according to their original order within modules',
	exports(exports) {
		assert.equal(exports, 'GREAT SUCCESS');
	}
};
