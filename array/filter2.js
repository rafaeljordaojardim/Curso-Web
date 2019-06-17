Array.prototype.filter2 = function (callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array.push(this[i])
        }  
    }
    return array
}

const produtos = [
    {nome:'Notebook', preco:2009, fragil: true},
    {nome:'ipad pro', preco:4199, fragil: true},
    {nome:'Copo de vidro', preco:12.45, fragil: true},
    {nome:'copo de plastico', preco:18.99, fragil: false},
]


const frageis = e => e.fragil
const caros = e=>e.preco>= 500


console.log(produtos.filter2(frageis).filter2(caros));
