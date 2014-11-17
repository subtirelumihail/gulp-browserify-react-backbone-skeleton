//Global config
global.config = require('./gulpconfig');

// include gulp
var gulp = require('gulp'); 
var requireDir = require('require-dir');
var dir = requireDir('./tasks');

for (var i in dir) {
    dir[i](gulp);
}
    
var path = require('path');

var reactify = require('reactify');
var browserify = require('browserify');  







