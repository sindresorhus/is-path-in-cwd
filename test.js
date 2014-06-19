'use strict';
var assert = require('assert');
var isPathInCwd = require('./');

it('should check if path is cwd', function () {
	assert(isPathInCwd('foo'));
	assert(!isPathInCwd('.'));
	assert(!isPathInCwd('/'));
	assert(!isPathInCwd('..'));
	assert(!isPathInCwd('../rainbow'));
});
