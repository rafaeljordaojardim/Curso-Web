const gulp = require('gulp')
    //criaremos um servidor automatizado
    //servidor de desenvlvimento, vai fazer o nuild automatixzamente, atualizando o browser automaticamenrte
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')


gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('srs/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }))
})