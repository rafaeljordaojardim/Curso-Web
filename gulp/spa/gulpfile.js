const gulp = require('gulp')
    //checar uma variavel de ambiente
const util = require('gulp-util')
    //para executar de forma sequencial
    //um de cada vez, serial
const sequence = require('run-sequence')
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production) { //passou a flag production
        sequence('deps', 'app')
            // gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
            // gulp.start('deps', 'app', 'servidor')
    }
})