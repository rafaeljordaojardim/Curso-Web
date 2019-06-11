
let numero = 1

{//Begin of the scope
    //its search in the internal code 
    //if it doesnt exist, it takes an out value
    let numero = 2
    console.log('dentro = ',numero)
}//end of the scope

console.log('fora ', numero)