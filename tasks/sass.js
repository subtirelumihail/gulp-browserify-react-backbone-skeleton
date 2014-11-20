module.exports = function (gulp,argv) {
	var sass = require('gulp-ruby-sass'),
	    autoprefix = require('gulp-autoprefixer');
	
	gulp.task('sass', function() {
	 return gulp.src(config.source.sass)
        .pipe(sass({
        	bundleExec: true,
        	require: ['susy'],
        	style: 'compressed'
        }))
	    .pipe(autoprefix('last 2 versions'))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(config.dest.css))
	});
};