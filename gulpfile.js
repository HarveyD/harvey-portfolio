const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

gulp.task('scripts', function () {
	return gulp.src('src/js/scripts.js')
		.pipe(plumber(plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit('end');
			}
		})))
		.pipe(uglify({
			preserveComments: 'license'
		}))
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
	return gulp.src('scss/styles.scss')
		.pipe(plumber(plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit('end');
			}
		})))
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('images', () => {
	return gulp.src('src/assets/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('favico', () => {
	return gulp.src('src/assets/favicon.ico')
		.pipe(gulp.dest('dist'))
});

gulp.task('html', function () {
	return gulp.src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts', 'styles', 'html', 'images'], function () {
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/scss/*.scss', ['styles']);
	gulp.watch('src/*.html', ['html']);
});

gulp.task('prod', ['scripts', 'styles', 'html', 'images', 'favico']);