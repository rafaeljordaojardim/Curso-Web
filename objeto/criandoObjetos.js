//using literal notation
const obj1 = {

}
console.log(obj1)

//Object in js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2);

//onwer constructions functions
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return (preco * (1 - desc)).toFixed(2) 
    }

}

//creating instances
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Caneta', 2998, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//factory function
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2) 
        }
    }
}
const f1 = criarFuncionario('Rafael', 5000, 2)
const f2 = criarFuncionario('maria', 10000, 2)
console.log(f1.getSalario(), f2.getSalario());

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

//a famous function that return an object
//JSON was converted to js object
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info);

