var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');


gulp.task('jsx', function() {
	return gulp.src('./public/app.jsx')
		.pipe(plumber())
		.pipe(browserify({
			insertGlobals: true,
			transform: [
				[ "reactify", {"es6": true} ]
			]
		}))
		.pipe(rename('app.js'))
		.pipe(plumber.stop())
		.pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
	gulp.watch([ './public/app.jsx', './public/blocks/*/*.jsx' ], [ 'jsx' ]);
});

gulp.task('default', [
	'jsx',
	'watch'
]);