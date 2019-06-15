//pessoa -> 123 -> {...}
//with constants you can change the attributes 
//but you dont change the reference, memory
const pessoa = {nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

//pessoa -> 456 -> {...}
//it's not allowed
//pessoa = {nome: 'Ana'}

//you cant change and add attributes
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome);

//you cant change that object
const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante);

