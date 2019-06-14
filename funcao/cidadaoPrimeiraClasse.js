//Functon is considered First-Class object in JS
//Higher-Order Function

//Criar de Forma literal
function fun1(){}

//store into a variable
const fun2 = function(){}

//store into an array
const array = [function(a, b){return a + b}, fun1, fun2]

// strore into an attibute of object
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());

//pass function as parameter
function run(fun){
    fun()
}

run(function(){console.log('Executando....');})

//a function can have another function
function soma(a, b){
    return function(c){
        console.log(a + b + c);
        
    }
}

soma(1, 2)(4)
const f = soma(1, 4)
f(4)