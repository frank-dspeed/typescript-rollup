var iife = (function (exports, external1, external2) {
	'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var external2__namespace = /*#__PURE__*/_interopNamespace(external2);



	Object.defineProperty(exports, 'x', {
		enumerable: true,
		get: function () {
			return external1.x;
		}
	});
	exports.ext = external2__namespace;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}, external1, external2));