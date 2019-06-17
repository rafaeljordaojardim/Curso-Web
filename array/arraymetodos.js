const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove the las element of array
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift()//remove the first element
console.log(pilotos);

//add an item in the first position
pilotos.unshift('Hamilton')
console.log(pilotos);

//splice can add and remove an itens

//add
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3,1)//massa was removed
console.log(pilotos);

//return a new array, starting in the index passed
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);

//taking an interval, 
//ex 1,4 - you'll return 1 until 3
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);



