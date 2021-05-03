import test from 'ava';
import isPathInCwd from './index.js';

test('main', t => {
	t.true(isPathInCwd('foo'));
	t.false(isPathInCwd('.'));
	t.false(isPathInCwd('/'));
	t.false(isPathInCwd('..'));
	t.false(isPathInCwd('../rainbow'));
});
