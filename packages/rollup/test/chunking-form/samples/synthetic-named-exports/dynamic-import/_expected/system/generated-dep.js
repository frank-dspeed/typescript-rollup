System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			var dep = { foo: 1 };
			const bar = 2;

			var dep$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), dep, {
				'default': dep,
				bar: bar
			}));
			exports('d', dep$1);

		}
	};
});
