'use strict';

var path = require('path')
  ;

var gulp = require('gulp')
  , clean = require('gulp-clean')
  , consolidate = require('gulp-consolidate')
  , copy = require('gulp-copy')
  , iconfont = require('gulp-iconfont')
  , run = require('run-sequence')
  ;

gulp.task('build:icon', function() {
  return gulp.src('src/svg/*.svg')
    .pipe(iconfont({
      fontName: 'pripet'
    , prependUnicode: true
    , formats: ['ttf', 'eot', 'woff', 'woff2']
    , appendCodepoints: true
    , appendUnicode: false
    , normalize: true
    , fontHeight: 1000
    , centerHerizontally: true
    }))
    .on('glyphs', function(glyphs, options) {
      // capitalize
      var fontName = options.fontName.replace(/\b\w/g, function(c) {
        return c.toUpperCase();
      });

      // generate icon css
      gulp.src('src/css/pripet.css')
        .pipe(consolidate('underscore', {
          glyphs: glyphs
        , fontName: fontName
        , fontPath: '../font/'
        , className: 'icon'
        , fontDate: new Date().getTime()
        }))
        .pipe(gulp.dest('dst/css'))

      // generate icon list template for application
      gulp.src('doc/index.html')
        .pipe(consolidate('underscore', {
          glyphs: glyphs
        , fontName: fontName
        }))
        .pipe(gulp.dest('templates/'))
    })
    .pipe(gulp.dest('dst/font'));
});

gulp.task('copy:css', function() {
  return gulp.src(path.resolve('./doc', 'style.css'))
    .pipe(copy('static', {prefix: 2}));
})

gulp.task('build', [
  'build:icon'
, 'copy:css'
]);

gulp.task('clean', function() {
  return gulp.src([
    'dst/*'
  ], {
    read: false
  })
  .pipe(clean());
});

// -- [main tasks]

gulp.task('default', function() {
  var nodeEnv = process.env.NODE_ENV || 'production';
  console.log('» gulp:', nodeEnv);

  return run('clean', 'build');
});
