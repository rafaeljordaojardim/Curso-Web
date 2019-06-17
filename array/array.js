//array is an object

console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Rafael', 'GUI']
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
console.log(aprovados[3]);
aprovados.push('Meu deu')//put an item
console.log(aprovados.length);
aprovados[9] = 'Rafael'
console.log(aprovados.length);

console.log(aprovados[0] === undefined);

aprovados.sort()//organize array
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados);

aprovados = ['Bia', 'Rafael', 'GUI']
console.log(aprovados);
aprovados.splice(1,0)
console.log(aprovados);












