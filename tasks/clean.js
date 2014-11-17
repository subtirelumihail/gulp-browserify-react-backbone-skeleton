
// Deletes the assets folder
module.exports = function (gulp) {
	var rimraf = require('gulp-rimraf');

	gulp.task('clean-dev', function(cb) {
	   return gulp.src(config.builds.dev)
	    .pipe(rimraf({ force: true }));
	});

	gulp.task('clean-build', function(cb) {
	   return gulp.src(config.builds.build)
	    .pipe(rimraf({ force: true }));
	});
};