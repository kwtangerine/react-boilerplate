"use strict";

var gulp = require('gulp');
var open = require('gulp-open');
var nodemon = require('gulp-nodemon');
var config = require('./server/config');

// Use nodemon to restart server on any js changes
gulp.task('server', function() {
  nodemon({ script: './server/server.js', ext: 'js'})
});

// Open browser to the URI
gulp.task('uri', function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://localhost:' + config.server.port}));
});

// Start all these tasks by default, eg. when 'gulp' is called
gulp.task('default', ['server', 'uri'], function() {});
