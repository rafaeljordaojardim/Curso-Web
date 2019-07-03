//responsavel para prover dados estaticos e submissao
//inter´pretar os dados e deixalos prontos
const bodyparser = require('body-parser')
const express = require('express')
const app = express()

//pode colocar urls tambem
app.use(express.static('.')) //forneça todos os arquivos estaticos
app.use(bodyparser.urlencoded({ extended: true })) //atraves de submit de um formulario ele traforma em objeto
app.use(bodyparser.json()) //codigo que sera aplicado se vim jsnon, transforma em objeto

//quando vim uma requisição do tipo get na url /teste irá devolver ok
//app.get('/teste', (req, res) => res.send('ok'))
//importanto o multer para trabalhar com upload de arquivos
const multer = require('multer')

//diskStorage serve para configurar a pasta onde ira salavar
//e o como sera o nom dos arquivos
const storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, './upload') //salvar na pasta atual
        },
        filename: function(req, file, callback) {
            callback(null, `${Date.now()}_${file.originalname}`)
        }
    })
    //single, nome do input que vai vir na requisicao
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, //espalhando os arquivos da requsição
        id: 9
    })
})


app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query //numero=10
    //req.params //interpretado na url
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: (par ? 'Par' : 'Impar')
    })
})

app.listen(8080, () => console.log('Executando'));