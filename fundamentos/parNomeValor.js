//pair name/value
const saudacao = 'Opa' //contex léxico 1

function exec(){
    const saudacao = 'Fala' //Contex Léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso : 90,
    endereco:{
        logradouro: 'Rua Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)