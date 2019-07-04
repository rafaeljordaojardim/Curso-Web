const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.scss') //ja tem a referencia dos outros
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyfyComents": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHtml', () => { //copia para a pasta build
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})