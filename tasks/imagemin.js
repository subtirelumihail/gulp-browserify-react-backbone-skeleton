module.exports = function (gulp, argv) {
	var gulpif = require('gulp-if');
	var changed = require('gulp-changed'),
		imagemin = require('gulp-imagemin');

	var isProd = argv.production ? true : false;
	
	//Minify images

	gulp.task('img', function() {
	 return gulp.src(config.source.img)
	    .pipe(changed(config.dest.img))
	    .pipe(gulpif(isProd, imagemin()))
	    .pipe(gulp.dest(config.dest.img));
	});

}