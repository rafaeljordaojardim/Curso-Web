const gulp = require('gulp')
    //concatenar varios arquivos em um só
const concat = require('gulp-concat')
    //tirar espaços em branco, deixar o js deixar o mais pequeno possivel
    //muda nome de variaveis se precisar
    // const uglify = require('gulp-uglify')
    //transpire um arquivo para outro
    //tradução de uma lingua pra outra
    //babel converte o js para java script que é suportada pelos browers
const babel = require('gulp-babel')

//quando coloca ENV ele pega o ultimo preset
//ele determina sozinho porcurar qual é que precisa
gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true,
            comments: false, //tirar coments
            presets: ["env"] //transformar em js puro
        }))
        //.pipe(uglify()) //vai minimizar o arquivo
        // .on('error', function(err) { //caso de erro
        // console.log(err);
        // })
        .pipe(concat('codigo.min.js')) //vai concatenar tudo em um só
        .pipe(gulp.dest('build'))
})