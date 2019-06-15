const ferrari = {
    modelo:'F40',
    velMax:324
}

const volvo = {
    modelo : 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)//can access the "superclass"
console.log(ferrari.__proto__ == Object.prototype);
console.log(volvo.__proto__ == Object.prototype);


function MeuObjeto(params) {
    
}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype);
