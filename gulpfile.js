var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

// Sass Source
var scssFiles = 'assets/scss/*.scss';

// CSS destination
var cssDest = 'dist/css';

// Desenvolvimento
var sassDevOptions = {
    outputStyle: 'expanded'
}

// Produção
var sassProdOptions = {
    outputStyle: 'compressed'
}

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDest));
});


gulp.task('watch', function() {
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});


gulp.task('default', function(cb) {
    return runSequence('clean', ['sassdev', 'sassprod', 'watch'], cb)
});