module.exports = function (gulp) {
	var browserSync = require("browser-sync");

	var server = {
		  start: function(){
		     browserSync({
		        server: {
		            baseDir: "./"
		        }
		    });
		  }
		};
	
	gulp.task('clean', ['clean-dev','clean-build']);

	// Development task
	gulp.task('dev', ['compass', 'styles-dev', 'jshint', 'scripts-dev', 'imagemin-dev', 'fonts'], function() {
	 	server.start();
	    gulp.run('watch');
	});

	// Production task
	gulp.task('prod',['compass', 'styles-prod', 'scripts-prod', 'imagemin-prod', 'fonts'], function() {
	  server.start();
	});
};