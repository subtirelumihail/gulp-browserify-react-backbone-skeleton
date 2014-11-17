//Fonts
module.exports = function (gulp) {

	gulp.task('fonts-prod', function() {
	  return gulp.src(config.source.font)
	    .pipe(gulp.dest(config.dest.build.font));
	});

	gulp.task('fonts-dev', function() {
	  return gulp.src(config.source.font)
	    .pipe(gulp.dest(config.dest.dev.font));
	});
};