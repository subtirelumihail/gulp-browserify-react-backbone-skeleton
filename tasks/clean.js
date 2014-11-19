
// Deletes the assets folder
module.exports = function (gulp) {
	var del = require('del');

	gulp.task('clean', function(cb) {
		del(config.build, function (err) {
		    console.log('Files deleted');
		});
	});
};