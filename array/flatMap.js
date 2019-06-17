const escola = [{
    nome: 'Turma m1',
    alunos:[{
        nome:'Gustavo',
        nota : 8
    },{
        nome : 'Ana',
        nota:7
    }]
    },{
    nome: 'Turma m2',
    alunos:[{
            nome:'vitor',
            nota : 4
        },{
            nome :'ricarda',
            nota: 10
        }]  
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);
console.log([].concat);

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))   
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);

