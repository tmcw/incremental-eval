(function(e){if("function"==typeof bootstrap)bootstrap("incrementaleval",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeIncrementalEval=e}else"undefined"!=typeof window?window.incrementalEval=e():global.incrementalEval=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
(1)
});
;