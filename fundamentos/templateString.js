//Sem um template
const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

//faz a interpolação
const template = `
    Olá
    ${nome}!`

    console.log(concatenacao, template);
//expressões...
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei.... ${up('cuidado')}!`);//${} expressão dentro de um template string
