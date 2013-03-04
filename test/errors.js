var test = require('tape'),
    incr = require('../');

test('reference error', function (t) {
    t.plan(1);
    t.ok(incr('2 = foo')[0] instanceof ReferenceError);
});

test('syntax error', function (t) {
    t.plan(2);
    t.same(incr('a = 2;\n2 ?= foo')[0], 2);
    t.ok(incr('2 ?= foo')[0] instanceof SyntaxError);
});
