const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const babelify = require('babelify')

var isFirst = false

gulp.task('jsx', function() {
	const bundler = browserify({
		entries: './public/app.jsx',
		debug: true
	});
	bundler.transform(babelify);

	if (!isFirst) {
		gulp.run('jsx-libs')
		isFirst = true
	}

	return bundler.bundle()
		.on('error', function (err) {
			console.log(err.toString());
			this.emit("end");
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		// .pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build/f/script'));
});

gulp.task('jsx-libs', function() {
	const bundler = browserify({
		entries: './public/libs.jsx',
		debug: true
	});
	bundler.transform(babelify);

	return bundler.bundle()
		.on('error', function (err) {
			console.log(err.toString());
			this.emit("end");
		})
		.pipe(source('libs.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		// .pipe(uglify())
		.pipe(sourcemaps.write('./'))
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

gulp.task('server-react', function () {
	const browserify = require('browserify'),
		buffer = require('vinyl-buffer'),
		source = require('vinyl-source-stream'),
		sourcemaps = require('gulp-sourcemaps'),
		babelify = require('babelify');

	const bundler = browserify({
		entries: './public/app.jsx',
		debug: true
	});
	bundler.transform(babelify);

	return bundler.bundle()
		.on('error', function (err) {
			console.log(err.toString());
			this.emit("end");
		})
		.pipe(source('server.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./build'));
})

gulp.task('default', [ 'jsx', 'style' ], function () {
	gulp.watch([ './public/**/*.jsx' ], [ 'jsx' ]);
	gulp.watch([ './public/blocks/*/*.styl' ], [ 'style' ]);
});