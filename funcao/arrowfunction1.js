let dobro = function (a) {
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

dobro = a => 2 * a //implicit return
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // it has a parameter
console.log(ola())


