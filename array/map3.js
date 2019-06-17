Array.prototype.map2 = function (callback) {
    const  newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho =[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',
]



//Return an array at least with prices
const primeirafunc = json => JSON.parse(json)
const segundafunc = produto => produto.preco

const resultado = carrinho.map2(primeirafunc).map2(segundafunc)
console.log(resultado);
