// operador ... rest (juntar)/spread (espalhar)
//usar rest com parametro de uma função


//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}//espalhou no clone
console.log(clone);

//usar spread  com array
const grupoA = ['joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal);


