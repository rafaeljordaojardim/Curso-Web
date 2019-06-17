const alunos = [
    {nome:'Joao', nota:7.3, bolsista: false},
    {nome:'Maria', nota:9.2, bolsista: false},
    {nome:'Joao', nota:9.8, bolsista: false},
    {nome:'Ana', nota:8.7, bolsista: false},

]
//challenge, if every students are stock exchange

const resultado = alunos.map(a => a.bolsista).reduce(function (acumulador,atual) {
    //console.log(acumulador, atual);
    return acumulador && atual
})
console.log(resultado);

//is someone stock exchange?
 const algumBolsista =(resultado,  bolsista) => resultado || bolsista
 console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
 