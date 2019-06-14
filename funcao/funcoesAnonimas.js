//exemples of anonymous functions
const soma = function(x , y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, (a, b) => a * b)
imprimirResultado(3,4, function (a, b) {
    return a - b
})

const pessoa = {
    falar:function () {
        console.log('Opa');
        
    }
}
