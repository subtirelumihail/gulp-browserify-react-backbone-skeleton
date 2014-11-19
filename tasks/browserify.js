module.exports = function (gulp, argv) {
	var browserify = require('browserify');
	var reactify = require('reactify');
	var source = require('vinyl-source-stream');
	var uglify = require('gulp-uglify');	
	var gulpif = require('gulp-if');
	var stripDebug = require('gulp-strip-debug');
	var buffer       = require('vinyl-buffer');

    gulp.task('browserify', function() {
	  
	  // Browserify/bundle the JS.
	  var bundler = browserify({
	    // Specify the entry point of your app
	    entries: [config.appEntry],
	    // Add file extentions to make optional in your requires
	    extensions: ['.jsx'],
	  });

	  return bundler
	    .transform(reactify)
	    .bundle()
	    .pipe(source(config.bundles.js))
	    .pipe(buffer())
	    .pipe(gulpif(argv.production, stripDebug()))
	    .pipe(gulpif(argv.production, uglify()))
	    .pipe(gulp.dest(config.dest.js));
	});
};