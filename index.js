function incrementalEval(____vs, __o) {
    __o = __o || {};
    var ____v = ____vs.split(/\n/),
        ____res = [];
    for (var ____i = 0; ____i < ____v.length; ____i++) {
        var ____line = ____v[____i];
        if (____line) {
            try {
                if (____line.match(/^\s*?\/\//)) {
                    // skip comment lines
                } else {
                    with(__o) {
                        ____res[____i] = (function(____js) {
                            return eval(____js);
                        })(____v.slice(0, ____i + 1).join('\n'));
                    }
                }
            } catch(e) {
                ____res[____i] = e;
            }
        } // skip blank lines
    }
    return ____res;
}

if (typeof module !== 'undefined') module.exports = incrementalEval;
