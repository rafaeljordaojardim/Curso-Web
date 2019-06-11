// storing a function in a var
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(3,3)

//storing a function arrow in a var
const soma = (a, b) => {
    return a + b
}

console.log(soma(3,3))

//hidden return
//storing with a unicle line 
const subtracao = (a, b) => a - b
console.log(subtracao(3,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')
