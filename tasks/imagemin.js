module.exports = function (gulp) {
	var changed = require('gulp-changed'),
		imagemin = require('gulp-imagemin');

	//Don't minify images
	gulp.task('imagemin-dev', function() {
	 return gulp.src(config.source.img)
	    .pipe(changed(config.dest.dev.img))
	    .pipe(gulp.dest(config.dest.dev.img));
	});

	//Minify images
	gulp.task('imagemin-prod', function() {
	 return gulp.src(config.source.img)
	    .pipe(changed(config.dest.build.img))
	    .pipe(imagemin())
	    .pipe(gulp.dest(config.dest.build.img));
	});

}