//arguments has all parameters passed in a function
function soma() {
    let soma = 0
    for (let i in arguments) {
       soma += arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(1,2,3,4,2,3,4,2,2));


console.log(soma('r','a','f','a'));
