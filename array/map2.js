const carrinho =[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',
]



//Return an array at least with prices
const primeirafunc = json => JSON.parse(json)
const segundafunc = produto => produto.preco

const resultado = carrinho.map(primeirafunc).map(segundafunc)
console.log(resultado);
