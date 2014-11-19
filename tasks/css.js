module.exports = function (gulp, argv) {
	var concat = require('gulp-concat'),
	    autoprefix = require('gulp-autoprefixer'),
	    gulpif = require('gulp-if'),
	    minifyCSS = require('gulp-minify-css');
	    

	// CSS concat, auto-prefix and minify
	gulp.task('styles', function() {
	  return gulp.src(config.source.css)
	    .pipe(concat(config.bundles.css))
	    .pipe(autoprefix('last 2 versions'))
	    .pipe(gulpif(argv.production, minifyCSS()))
	    .pipe(gulp.dest(config.dest.css));
	});
};