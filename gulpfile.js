'use strict';

var gulp = require('gulp');
var btxcoreTasks = require('btxcore-build');

btxcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
