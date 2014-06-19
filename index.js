'use strict';
var path = require('path');
var pathIsInside = require('path-is-inside');

module.exports = function (pth) {
	// workaround: https://github.com/domenic/path-is-inside/issues/2
	if (path.resolve(pth) === process.cwd()) {
		return false;
	}

	return pathIsInside(path.resolve(pth), process.cwd());
};
