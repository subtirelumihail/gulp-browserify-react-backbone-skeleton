// JS hint task
module.exports = function (gulp) {
	var jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish');

	gulp.task('jshint', function() {
	 return gulp.src(config.source.jshint)
	    .pipe(jshint())
	    .pipe(jshint.reporter(stylish));
	});
};