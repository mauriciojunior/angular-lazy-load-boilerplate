(function() {
	'use stric';

	var gulp = require('gulp')
		, browserSync = require('browser-sync').create()
		, uglify = require('gulp-uglify')
		, concat = require('gulp-concat')
		, reload = browserSync.reload;

	gulp.task('js', function() {
		gulp.src('./www/app/**/*.js', { base: '.' })
			.pipe(uglify({ mangle: false }))
			.pipe(gulp.dest('./build'))
	})

	gulp.task('css', function() {
		gulp.src('./www/**/*.css', { base: '.' })
			.pipe(gulp.dest('./build'))
	})

	gulp.task('html', function() {
		gulp.src('./www/**/*.html', { base: '.' })
			.pipe(gulp.dest('./build'))
	})

	gulp.task('copy-lib', function() {
		gulp.src('./www/lib/**/*.min.js')
			.pipe(concat('vendors.js'))
			.pipe(gulp.dest('./build/www/lib'))
	})

	gulp.task('browser-sync', function() {
		browserSync.init({
			server: {
				baseDir: './build/www'
			}
		});
	});

	gulp.task('watch', function () {
		console.log(reload)
    gulp.watch('www/app/**/*.css', ['css', reload]);
    gulp.watch('www/**/*.html', ['html', reload]);
    gulp.watch('www/app/**/*.js', ['js', reload]);
	});

	gulp.task('default', ['html', 'css', 'js', 'copy-lib', 'watch', 'browser-sync']);
})();
