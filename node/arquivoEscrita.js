const fs = require('fs')

const produto = {
    nome :'celular',
    preco : 1234.98,
    desconto: 0.15,
    uai:'uashusa'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
    
})