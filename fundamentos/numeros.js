const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
//retorna se é integer ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 *peso2;
const media = total / (peso1 + peso2)
//toFixed exibe apenas dois numeros apos a vírgula 
console.log(media.toFixed(2));
//retorna a string do numero
console.log(media.toString(2));
//quando passa 2 dentro do toStirng retorna binario do numero
console.log(typeof media);
//numer é o tipo do dado
//Number é a função

