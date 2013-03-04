## incremental-eval

[![](http://ci.testling.com/tmcw/incremental-eval.png)](http://ci.testling.com/tmcw/incremental-eval)

Given a string of javascript code, returns the result of running the code
line-by-line.

## example

```js
var incr = require('incremental-eval');

incr('a = 2'); // [2]
incr('a = 2\n a * 2'); // [2, 4]
```

### incrementalEval()

Takes a piece of Javascript code, as a string, and returns an array of results
per-line. If a line does not return results, it is in the array as null.

## license

BSD
