//Fonts
module.exports = function (gulp) {

	gulp.task('fonts', function() {
	  return gulp.src(config.source.font)
	    .pipe(gulp.dest(config.dest.font));
	});

};