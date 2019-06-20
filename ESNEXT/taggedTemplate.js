//tagged templates-- processar o template de uma funcao
function tag(partes, ...valores) {
    console.log(partes);
    console.log( valores);
    return 'outra string'
}

const aluno = 'gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`);
