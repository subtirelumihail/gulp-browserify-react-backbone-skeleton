module.exports = function (gulp, argv) {
	var browserSync = require("browser-sync");

	var server = {
		  start: function(){
		     browserSync({
		        server: {
		            baseDir: "./"+config.build+'/'
		        }
		    });
		  }
		};

	// Development task
	gulp.task('default', ['browserify', 'compass', 'styles', 'jshint', 'img', 'fonts', 'html'], function() {
		if(!argv.production){
			server.start();
	    	gulp.run('watch');
		}
	});
};