const a = {name: 'Teste'};
console.log(a);
//reference 
const b = a;
console.log(b);
b.name = 'aaa';
console.log(a);
//values
let c = 3;
let d = c;
d++;
console.log(d);//
console.log(c);

let valor //never initialized
console.log(valor);//undefined
valor = null;//initialized without value and address
//console.log(valor.toString());//Error!

const produto = {}//not null, it was created a blank object
console.log(produto.preco)

produto.preco = 3.50
console.log(!!produto.preco)