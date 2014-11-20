// watch for JS changes
module.exports = function (gulp, argv) {
	var browserSync = require("browser-sync");

	gulp.task('watch', function () {
		gulp.watch(config.source.js, ['browserify', 'jshint', browserSync.reload]);

		// watch for SASS changes
		gulp.watch(config.source.sass, ['sass', browserSync.reload]);

		// watch for IMAGES changes
		gulp.watch(config.source.img, ['imagemin-prod', browserSync.reload]);

		// watch for FONT changes
		gulp.watch(config.source.font, ['fonts', browserSync.reload]);

		// watch for React changes
		gulp.watch(config.source.react, ['browserify', browserSync.reload]);

		// watch for HTML changes
		gulp.watch(config.source.html, ['html', browserSync.reload]);
	});
};