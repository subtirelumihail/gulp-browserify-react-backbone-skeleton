module.exports = function (gulp) {
	var concat = require('gulp-concat'),
	    autoprefix = require('gulp-autoprefixer'),
	    minifyCSS = require('gulp-minify-css');
	    
	// CSS concat, auto-prefix and minify
	gulp.task('styles-dev', function() {
	 return gulp.src(config.source.css)
	    .pipe(concat(config.bundles.css))
	    .pipe(gulp.dest(config.dest.dev.css));
	});

	// CSS concat, auto-prefix and minify
	gulp.task('styles-prod', function() {
	  return gulp.src(config.source.css)
	    .pipe(concat(config.bundles.css))
	    .pipe(autoprefix('last 2 versions'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest(config.dest.build.css));
	});
};