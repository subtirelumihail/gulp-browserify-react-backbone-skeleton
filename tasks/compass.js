module.exports = function (gulp) {
	var compass = require('gulp-compass');
	
	gulp.task('compass', function() {
	 return  gulp.src(config.source.sass)
	  .pipe(compass())
	  .pipe(gulp.dest('src/css'));
	});
};