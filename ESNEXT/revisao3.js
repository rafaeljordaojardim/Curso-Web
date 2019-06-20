//ES8 : Object.values/Object.entries
const obj = {a : 1, b : 2, c : 3}
console.log(Object.keys(obj));//ja tinha
console.log(Object.values(obj));
console.log(Object.entries(obj));

//melhoria notação literal
const nome = 'Carla' 
const pessoa = {
    nome,//so coloca a chave
    ola(){//pode criar assim agr
        return 'oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola());

//Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'au au!'
    }
}

console.log(new Cachorro().falar());




