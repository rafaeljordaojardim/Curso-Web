//declarando um array
//array no js é dinamico diferente do java
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);//acessando indices
console.log(valores[0], valores[4]);//indice fora retorna undefined

valores[4] = 10
console.log(valores);

console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());//tirando o ultimo elemento do array
//deletando um elemento do array
delete valores[0]//delete funciona no contexto de objetos
console.log(valores)
console.log(typeof valores)