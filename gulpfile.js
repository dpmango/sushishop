const gulp = require('gulp')

let is_callback = false

gulp.task('script', (callback) => {
	const webpack = require('webpack')
	const gutil = require("gulp-util")

	webpack(require('./webpack.config.js'), (err, stats) => {
		if (err) {
			throw new gutil.PluginError("webpack", err)
		}
		gutil.log("[webpack]", stats.toString({chunks:false}))

		if (!is_callback) {
			callback()
			is_callback = true
		}
	})
})

gulp.task('style', function () {
	const header = require('gulp-header')
	const fs = require('fs')
	const newer = require('gulp-newer')
	const cssnano = require('cssnano')
	const plumber = require('gulp-plumber')
	const concat = require('gulp-concat')
	const sourcemaps = require('gulp-sourcemaps')
	const stylus = require('gulp-stylus')
	const postcss = require('gulp-postcss')
	const autoprefixer = require('autoprefixer')

	let postcss_action = [ autoprefixer({browsers: ['> 0.00001%']}) ]
	if (process.env.NODE_ENV == 'production') {
		postcss_action.push(cssnano())
	}

	return gulp.src(['!./public/blocks/App/Config.styl', './public/blocks/App/App.styl', './public/blocks/*/*.styl'])
		.pipe(newer('./build/f/style'))
		.pipe(sourcemaps.init({}))
		.pipe(plumber())
		.pipe(header(fs.readFileSync('./public/blocks/App/Config.styl', 'utf8')+"\n\n", false))
		.pipe(stylus())
		.pipe(postcss(postcss_action))
		.pipe(concat('style.css'))
		.pipe(plumber.stop())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build/f/style'))
})


gulp.task('server', () => {
	require('./server.js')
})

gulp.task('default', [ 'style', 'script', 'server' ], function () {
	gulp.watch([ './public/blocks/*/*.styl' ], [ 'style' ])
})