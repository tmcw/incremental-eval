var test = require('tape'),
    incr = require('../');

test('basic assignment', function (t) {
    t.plan(3);
    t.same(incr('a = 2'), [2]);
    t.same(incr('a = 2\nb = 3'), [2, 3]);
    t.same(incr('a = 2\nb = 3\nc = 5'), [2, 3, 5]);
});

test('objects', function (t) {
    t.plan(3);
    t.same(incr('[]'), [[]]);
    t.same(incr('a = {}'), [{}]);
    t.same(incr('""'), [""]);
});

test('using variables', function (t) {
    t.plan(1);
    t.same(incr('a = 2\na * 2'), [2, 4]);
});
