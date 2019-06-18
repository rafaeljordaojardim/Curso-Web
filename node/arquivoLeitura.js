//isso já vem no node usahsauhs
const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//assincrono, tem que passar uma callBack
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
    
})

//carregou antes
const config = require('./arquivo.json')
console.log(config.db);

//leitura de pasta
//__dirname - representa o diretorio atual
fs.readdir(__dirname, (error, arquivos)=>{
    console.log('Conteudo da pasta');
    console.log(arquivos);
    
    
})