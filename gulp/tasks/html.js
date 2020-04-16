const gulp = require('gulp');
const plumber = require('gulp-plumber');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-html-minifier');
const htmlValidator = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');

module.exports = function html() {
    return gulp.src('src/pages/*.html')
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: '@@'
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(htmlValidator())
        .pipe(bemValidator())
        .pipe(gulp.dest('build'))
};
