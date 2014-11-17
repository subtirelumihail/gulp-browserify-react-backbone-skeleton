module.exports = function (gulp) {
	var compass = require('gulp-compass');
	
	gulp.task('compass', function() {
	 return  gulp.src(config.source.sass)
	  .pipe(compass({
	    css: config.dest.defaults.css,
	    sass: config.dest.defaults.sass,
	    require: []
	  }))
	  .pipe(gulp.dest(config.dest.defaults.sass));
	});
};