var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	stylus = require('gulp-stylus'),
	postcss      = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	uglify = require('gulp-uglify');


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
		// .pipe(uglify())
		// .pipe(plumber.stop())
		.pipe(gulp.dest('./build/f/script'));
});

gulp.task('style', function () {
	return gulp.src([ './public/blocks/App/App.styl', './public/blocks/*/*.styl' ])
		.pipe(plumber())
		.pipe(concat('style.styl'))
		.pipe(stylus())
		.pipe(concat('style.css'))
		.pipe(postcss([
			autoprefixer({ browsers: ['last 10 versions'] })
		]))
		.pipe(plumber.stop())
		.pipe(gulp.dest('./build/f/style'));
});


gulp.task('default', [ 'jsx', 'style' ], function () {
	gulp.watch([ './public/**/*.jsx' ], [ 'jsx' ]);
	gulp.watch([ './public/blocks/*/*.styl' ], [ 'style' ]);
});