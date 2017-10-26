const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const runSequence = require('run-sequence');

var scssFiles = 'assets/scss/*.scss';
var cssFiles = 'assets/css/*.css';
var jsFiles = 'assets/js/*.js';
var imgsFiles = 'assets/images/**/*';

var sassDevOptions = {
  outputStyle: 'expanded'
};

// Limpa a pasta dist
gulp.task('clean', function () {
  return gulp.src('dist/')
    .pipe(clean());
});

// Rodar em tempo real o sass
gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Inicia o localhost:3000 com real time
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: ["./"],
      directory: true
    },
  });
  gulp.watch(scssFiles, ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch(jsFiles).on('change', browserSync.reload);
});

// Copia o HTML5
gulp.task('copyhtmls', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist/'));
});

// Copia as Imagens
gulp.task('copyimgs', function () {
  return gulp.src(imgsFiles)
    .pipe(gulp.dest('dist/assets/images/'));
});

// Minifica o HTML
gulp.task('htmlmin', function () {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});

// Minifica o  css
gulp.task('cssmin', function () {
  return gulp.src([cssFiles, '!assets/css/components.css'])
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/css'));
});

// Minifica os scripts
gulp.task('uglify', function () {
  return gulp.src([jsFiles])
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

// copia as fontes
gulp.task('fonts', function () {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts/'));
});

// Rodar as tarefas na sequência para o desenvolvomento
gulp.task('dev', function (cb) {
  return runSequence('clean', ['serve'], cb);
});

// Rodar as tarefas na sequência para a produção
gulp.task('prod', function (cb) {
  return runSequence(['copyhtmls', 'copyimgs', 'fonts', 'cssmin', 'uglify', 'htmlmin'], cb);
});
