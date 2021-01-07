const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  return gulp.src('./src/**/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "/index.html"
    }
  });
  gulp.watch('./src/**/*.scss', style).on('change',browserSync.reload);
  gulp.watch('./*.html').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watch;