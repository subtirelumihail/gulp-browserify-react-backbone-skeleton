/* Bower */
/* 
Comannds:
  $ bower install --save plugin-name
  $ gulp bower
*/
module.exports = function (gulp) {
	var wiredep = require('wiredep').stream;
	
	gulp.task('bower', function () {
	  gulp.src(config.source.html)
	    .pipe(wiredep())
	    .pipe(gulp.dest(config.dest.html));
	});
};