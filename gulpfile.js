'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () { 
	return gulp.src('./scss/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css')); 
});



gulp.task('watch', function () { 
	gulp.watch('./scss/**/*.scss', [ 'sass' ]); 
});

gulp.task('default', function () {
	gulp.start(
		'sass',
		'watch'
	);
});