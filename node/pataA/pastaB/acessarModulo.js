const moduloA = require('../../sistemaDeModulosAula1/moduloA')
console.log(moduloA.ola );

//vai procurar na pasta c  o index
const c = require('./pastaC')
console.log(c.ola2);


const http = require('http')
http.createServer((req, res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)
