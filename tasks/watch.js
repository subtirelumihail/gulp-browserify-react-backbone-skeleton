// watch for JS changes
module.exports = function (gulp) {
	var browserSync = require("browser-sync");

	gulp.task('watch', function () {
		gulp.watch(config.source.js, ['scripts-dev', 'jshint', browserSync.reload]);
		
		// watch for CSS changes
		gulp.watch(config.source.css, ['styles-dev', browserSync.reload]);

		// watch for SASS changes
		gulp.watch(config.source.sass, ['compass', browserSync.reload]);

		// watch for IMAGES changes
		gulp.watch(config.source.img, ['imagemin-prod', browserSync.reload]);

		// watch for FONT changes
		gulp.watch(config.source.font, ['fonts', browserSync.reload]);

		// watch for HTML changes
		gulp.watch(config.source.html).on('change', function(file) {
		    browserSync.reload();
		});
	});
};