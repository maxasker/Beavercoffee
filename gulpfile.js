'use strict';
// Dependencies
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const semistandard = require('gulp-semistandard');

// Init semistandard dependency
gulp.task('semistandard', () => {
  return gulp.src(['src/**/*.js', 'gulpfile.js'])
    .pipe(semistandard())
    .pipe(semistandard.reporter('default', {
      breakOnError: false
    }));
});

// Gulp test
gulp.task('tests', () => {
  nodemon({
    script: 'test/tests.js',
    ext: 'js json',
    env: {
      'NODE_ENV': 'test'
    },
    ignore: ['ignored.js'],
    tasks: []
  }).on('restart', () => {
    console.log('restarted!');
  });
});

// Gulp serve
gulp.task('serve', () => {
  nodemon({
    script: './server.js',
    ext: 'js json',
    env: {
      'NODE_ENV': 'development'
    },
    ignore: ['ignored.js'],
    tasks: []
  }).on('restart', () => {
    console.log('restarted!');
  });
});
