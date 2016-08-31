var gulp = require("gulp");
var babel = require("gulp-babel");

var sourcemaps = require("gulp-sourcemaps");

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task("default", function () {
	return gulp.src("src/app.js")
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist"));
});

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("./*.html").on('change', browserSync.reload);
});
