module.exports = function (gulp) {
	var concat = require('gulp-concat'), 
		stripDebug = require('gulp-strip-debug'),
    	uglify = require('gulp-uglify');

    // JS concat
	gulp.task('scripts-dev', function() {
	 return gulp.src(config.source.js)
	    .pipe(concat(config.bundles.js))
	    .pipe(gulp.dest(config.dest.dev.js));
	});

	// JS  striping the console, concatenate and uglify it
	gulp.task('scripts-prod', function() {
	  return gulp.src(config.source.js)
	    .pipe(concat(config.bundles.js))
	    .pipe(stripDebug())
	    .pipe(uglify())
	    .pipe(gulp.dest(config.dest.build.js));
	});
};