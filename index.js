function incrementalEval(____vs) {
    var ____res = [],
        ____v = ____vs.split(/\n/);
    for (var ____i = 0; ____i < ____v.length; ____i++) {
        var ____line = ____v[____i];
        if (____line) {
            try {
                if (____line.match(/^\s*?\/\//)) {
                    res.push('');
                } else {
                    ____res.push((function(____js) {
                        return eval(____js);
                    })(____v.slice(0, ____i + 1).join('\n')));
                }
            } catch(e) {
                if (!(e instanceof SyntaxError)) ____res.push(e);
                else ____res.push('');
            }
        } else ____res.push('');
    }
    return ____res;
}

if (typeof module !== 'undefined') module.exports = incrementalEval;
