incremental-eval.js: index.js
	browserify -s incrementalEval index.js > incremental-eval.js
