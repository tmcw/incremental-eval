## incremental-eval

Given a string of javascript code, returns the result of running the code
line-by-line.

## example

```js
var incr = require('incremental-eval');

incr('a = 2'); // [2]
incr('a = 2\n a * 2'); // [2, 4]
```

## license

BSD
