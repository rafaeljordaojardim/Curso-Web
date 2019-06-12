//thtat resouse raised on ES2015

const pessoa = {
    nome :'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade } = pessoa //take of name and age of pessoa
console.log(nome, idade)

const {nome : n, idade : i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa//assume o valor se nao vir n
console.log(sobrenome, bemHumorado)

const {endereco:{logradouro, numero}} = pessoa
console.log(logradouro, numero)

const {conta : {agr, num}} = pessoa// caminho ate o dado claro, só o ultimo pode nao ser definido