let a = 3

global.b = 123

this.c = 456

console.log(this.a)
console.log(global.b) //its equals window browser
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports  === this)
//in node each file is a module

//creating a var crazy: withou var or let
//dont do that at home!
abc = 3
console.log(global.abc)


//module.exports = {e:456, f: false, g :'teste'}