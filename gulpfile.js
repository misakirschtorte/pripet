'use strict';

var gulp = require('gulp')
  , clean = require('gulp-clean')
  , run = require('run-sequence')
  ;

gulp.task('clean', function() {
  return gulp.src([
    'dst/*'
  , 'tmp/builds/*'
  , 'tmp/*'
  ], {
    read: false
  })
  .pipe(clean());
});

// -- [main tasks]

gulp.task('default', function() {
  var nodeEnv = process.env.NODE_ENV || 'production';
  console.log('» gulp:', nodeEnv);

  return run('clean');
});
