//Object.preventExtensions
//you cant add new attr, just delete
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco:1.99,
    tag : 'Promocao'
})
console.log('Extensivel:',Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto);

//Object.seal
//you cant add attr and delete
//just modify
const pessoa = {nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa));
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

//Object.freeze = selado + valores constantes
