//dynamic collection of pars key/value
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo :'a4',
    valor: 89000,
    proprietario:{
        nome : 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 43   
    }],
    calcularValorSeguro:  function (params) {
        
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.lenght);




