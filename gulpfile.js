/*
    Workflow sass + browser-sync + uglify + purgecss
    Roque Arnás Izquierdo
    https://didesweb.com/
*/
var path        = "localhost/unusedcss";
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var cleanCSS   = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
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
    .pipe(
      purgecss({
        content: ['**/*.php']
      })
    )
    .pipe(gulp.dest('app/styles'))
})

gulp.task('sass', function () {
    gulp.src('assets/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({stream:true}));
});

gulp.task('uglify', function() {
    gulp.src('assets/scripts/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('app/scripts'))
    .pipe(reload({stream:true}));
});

gulp.task('default', ['sass', 'uglify', 'browser-sync'], function () {
    gulp.watch("assets/styles/**/*.scss", ['sass']);
    gulp.watch("assets/scripts/**/*.js", ['uglify']);
});

gulp.task('production', ['purgecss'], function () {
    gulp.start('production');
});
