const produtos = [
    {nome:'Notebook', preco:2009, fragil: true},
    {nome:'ipad pro', preco:4199, fragil: false},
    {nome:'Copo de vidro', preco:12.45, fragil: true},
    {nome:'copo de plastico', preco:18.99, fragil: false},
]

console.log(produtos.filter(function (p) {
    return false
}));

const frageis = e => e.fragil
const caros = e=>e.preco>= 500
produtos.filter(frageis).filter(caros)
console.log(produtos.filter(frageis).filter(caros));
