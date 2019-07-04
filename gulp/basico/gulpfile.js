//esse nome é padrão
//vamos definir a primrira task
const gulp = require('gulp')

//default é a porta de entrada
gulp.task('default', () => {
        gulp.start('copiar', 'fim')
    })
    //primriro vai executar a antes 1 depois a antes 2 ai sim vai listar o cpiar
gulp.task('copiar', ['antes1', 'antes2'], () => {
    // ['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']
    //'pastaA/*.txt'
    gulp.src('pastaA/**/*.txt') //arquivos  que serão usados, o caminho
        // .pipe(tranformacao1())
        // .pipe(tranformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('antes 1!!');
})

gulp.task('antes2', () => {
    console.log('antes 2!!');
})

gulp.task('fim', ['fim1', 'fim2']) //sem corpo, so chama as outras tasks

gulp.task('fim1', () => {
    console.log('fim 1')
})

gulp.task('fim2', () => {
    console.log('fim 2')
})