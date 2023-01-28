/*
    Workflow for sass
    Roque Arnás Izquierdo
    https://didesweb.com/
*/
var path        = "localhost/me";
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var minifycss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var purgecss    = require('gulp-purgecss');

gulp.task('browser-sync', function() {
    var files = ['**/*.php'];
    browserSync.init(files, {
    proxy: path,
    notify: false
    });
});

gulp.task('purgecss', function () {
  gulp.src('app/styles/main.css')
      .pipe(rename({
          suffix: '.min'
      }))
    .pipe(
      purgecss({
        content: ['index.php']
      })
    )
    .pipe(gulp.dest('app/styles'))
})

gulp.task('sass', function () {
    gulp.src('assets/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({stream:true}));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("assets/styles/**/*.scss", ['sass']);
});

gulp.task('build', ['purgecss'], function () {
  gulp.start('build');
});