//conjunto nao indexado que nao aceita repetição

const times = new Set()

times.add('vasco')
times.add('Sao paulo').add('Palmeiras').add('Conrinthians')
times.add('Flamengo')
times.add('vasco')

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
console.log(times.delete('Flamengo'));
console.log(times.has('Flamengo'));

const nomes = ['Rafael', 'lucas', 'julia', 'lucas']
const setNomes = new Set(nomes)
console.log(setNomes);
