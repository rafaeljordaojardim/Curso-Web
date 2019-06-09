const escola = "Cod3r";
console.log(escola.charAt(4));
console.log(escola.charAt(5));
//retorna o valor da tabela unicode (ascii)
console.log(escola.charCodeAt(3));
//retoorna o indice do que foi pedido
console.log(escola.indexOf('3'));
//faz uma substring da string do 1 para frente
console.log(escola.substring(1));
//vai imprimir em um intervalo sem incluir o 3
console.log(escola.substring(0, 3));

//concatenando string, pode-se usar literais
console.log('Escola '.concat(escola).concat("!"));

//substituindo uma string
console.log(escola.replace(3, 'e'));

//separando a  string em um array
console.log("Ana, Maria, Pedro".split(","));