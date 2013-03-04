var test = require('tape'),
    incr = require('../');

test('scope function', function (t) {
    t.plan(2);

    t.same(incr('foo()', {
        foo: function() {
            return 2;
        }
    }), [2]);

    t.same(incr('require()', {
        require: function() {
            return 3;
        }
    }), [3]);
});

test('scope var', function (t) {
    t.plan(2);

    t.same(incr('foo', {
        foo: 2
    }), [2]);

    t.same(incr('require', {
        require: 3
    }), [3]);
});
