import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m('foo'));
	t.false(m('.'));
	t.false(m('/'));
	t.false(m('..'));
	t.false(m('../rainbow'));
});
