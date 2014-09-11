var vm = require('vm');

function incrementalEval(vs, o) {
    o = o || {};
    var v = vs.split(/\n/), res = [];
    for (var i = 0; i < v.length; i++) {
        var line = v[i];
        if (line) {
            try {
                if (line.match(/^\s*?\/\//)) {
                    // skip comment lines
                } else {
                    with (o) {
                        res[i] = (function(js) {
                            var scope = {};
                            var result = vm.runInNewContext(js, scope);
                            var afterKeys = Object.keys(this);
                            return {
                                value: result,
                                scope: scope
                            };
                        })(v.slice(0, i + 1).join('\n'));
                    }
                }
            } catch(e) {
                res[i] = e;
            }
        } // skip blank lines
    }
    return res;
}

module.exports = incrementalEval;
