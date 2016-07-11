const gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');

gulp.task('jsx', function() {
	const browserify = require('browserify'),
		buffer = require('vinyl-buffer'),
		source = require('vinyl-source-stream'),
		sourcemaps = require('gulp-sourcemaps'),
		babelify = require('babelify');

	var bundler = browserify({
		entries: './public/app.jsx',
		debug: true
	});
	bundler.transform(babelify);

	return bundler.bundle()
		.pipe(plumber())
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		// .pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(plumber.stop())
		.pipe(gulp.dest('./build/f/script'));
});

gulp.task('style', function () {
	const stylus = require('gulp-stylus'),
		postcss = require('gulp-postcss'),
		autoprefixer = require('autoprefixer');

	return gulp.src([ './public/blocks/App/App.styl', './public/blocks/*/*.styl' ])
		.pipe(plumber())
		.pipe(concat('style.styl'))
		.pipe(stylus())
		.pipe(postcss([
			autoprefixer({ browsers: ['last 10 versions'] })
		]))
		.pipe(plumber.stop())
		.pipe(gulp.dest('./build/f/style'));
});

gulp.task('jsx-server', function() {
	const gulpreact = require('gulp-react')
	return gulp.src([ './public/*.jsx', './public/*/*/*.jsx' ])
		.pipe(plumber())
		.pipe(gulpreact())
		.pipe(plumber.stop())
		.pipe(gulp.dest('./server/'));
});

gulp.task('server', function() {
	gulp.run('jsx-server');

	const express = require('express'),
		app = express(),
		ReactDOMServer = require('react-dom/server');


	React = require('react');
	isNode = true;

	app.get('*', function (req, res) {
		res.send(
			ReactDOMServer.renderToString(
				require('./server/route')
			)
		)
	})

	app.listen(3000);
});


gulp.task('default', [ 'jsx', 'style' ], function () {
	gulp.watch([ './public/**/*.jsx' ], [ 'jsx' ]);
	gulp.watch([ './public/blocks/*/*.styl' ], [ 'style' ]);
});