//function without return
function imprimirSoma(a, b){
    console.log(a + b)
}//end

imprimirSoma(2, 3);//calling function
imprimirSoma(2, 2, 4, 5, 5);//you can pass more parameters
imprimirSoma();//Not a number

//function with return
function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(2, 5));