//first strategy to generate standard value
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

//console.log(soma1(), soma1(3), soma1(1,2,3))

//Second, third and fourth strategy to generate standard value
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;//2°
    b = 1 in arguments ? b : 1;//3°
    c = isNaN(c) ? 1: c;//4°

    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//standard value of es2015
//better way to set standard value
function soma3(a = 1, b = 1, c =1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))

