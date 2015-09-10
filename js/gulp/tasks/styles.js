var gulp = require('gulp')
	sass = require('gulp-sass')
	rename = require('gulp-sass')
	minifyCSS = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src('styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css/'));
});

gulp.task('styles-prod', function() {
    gulp.src('styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS({keepBreaks: false}))
        // .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./styles/css/'));
});