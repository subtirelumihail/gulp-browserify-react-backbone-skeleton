//Global config
global.config = require('./gulpconfig');

// include gulp
var gulp = require('gulp'); 
var requireDir = require('require-dir');
var dir = requireDir('./tasks');

for (var i in dir) {
    dir[i](gulp);
}
 
// include plug-ins
var jshint = require('gulp-jshint'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    compass = require('gulp-compass'),
    
    wiredep = require('wiredep').stream,
    path = require('path');

var reactify = require('reactify');
var browserify = require('browserify');  

//Sources
  var htmlSrc = 'assets/*.html',
      htmlDst = 'assets';
  var imgSrc  = 'src/img/**/*',
      imgDst  = 'assets/img';
  var jsSrc   = ['libs/*.js', 'src/js/libs/*.js','src/js/*.js'],
      jsDst   = 'assets/js/';
  var cssSrc  = ['libs/*.css', 'src/css/libs/*.css', 'src/css/**/*.css', 'src/css/*.css'],
      cssDst  = './assets/css/';
  var fontSrc  = 'src/fonts/*',
      fontDst  = './assets/fonts/';

  var compassSrc = ['libs/*.scss', 'src/sass/**/*.scss', 'src/sass/*.scss'];

/*Connecting BrowserSync ...*/
var server = {
  start: function(){
     browserSync({
        server: {
            baseDir: "./"
        }
    });
  }
}


/* Bower */
/* 
Comannds:
  $ bower install --save plugin-name
  $ gulp bower
*/
gulp.task('bower', function () {
  gulp.src('./*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

/*Compass*/
gulp.task('compass', function() {
 return  gulp.src(compassSrc)
  .pipe(compass({
    css: 'src/css',
    sass: 'src/sass'
  }))
  .pipe(gulp.dest('src/css'));
});


//Fonts
gulp.task('fonts', function() {
  return gulp.src(fontSrc)
    .pipe(gulp.dest(fontDst));
});


/*
================================
      Gulp development
================================
*/


// CSS concat, auto-prefix and minify
gulp.task('styles-dev', function() {
 return gulp.src(cssSrc)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(cssDst));
});

// JS hint task
gulp.task('jshint', function() {
 return gulp.src('src/js/')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JS concat, strip debugging and minify
gulp.task('scripts-dev', function() {
 return gulp.src(jsSrc)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(jsDst));
});

//Minify images
gulp.task('imagemin-dev', function() {
 return gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(gulp.dest(imgDst));
});

/*
================================
      Gulp production
================================
*/


// CSS concat, auto-prefix and minify
gulp.task('styles-prod', function() {
  return gulp.src(cssSrc)
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssDst));
});

// JS  striping the console, concatenate and uglify it
gulp.task('scripts-prod', function() {
  return gulp.src(jsSrc)
    .pipe(concat('libs.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(jsDst));
});

//Minify images
gulp.task('imagemin-prod', function() {
 return gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

