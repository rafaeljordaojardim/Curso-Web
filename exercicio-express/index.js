const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param')
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))
app.use(saudacao('Guilherme'))


app.post('/usuarios', usuarioApi.salvar);
app.get('/usuarios', usuarioApi.obter);

app.use( (req, res, next) => {
    console.log('antes ?');
    next()
})

/*app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo ${req.query.completo} ano =${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/opa', (req, res, next) => {
    console.log('Durante ?');
    res.json({
        data:[
            {id:7,name:'Ana',position:1},
            {id:34,name:'Bia',position:2},
            {id:73,name:'Carlos',position:3}
        ],
        count:30,
        skipe:0,
        limit:3,
        status:200
    })

    next()
})

    app.use( (req, res, ) => {
        console.log('depois?');
    })


    // res.json([
    //     {id:7,name:'Ana',position:1},
    //     {id:34,name:'Bia',position:2},
    //     {id:73,name:'Carlos',position:3},
        
    // ])
    //     res.json({
    //        name:'opad 32 gb',
    //        price:234,
    //        discount:0.12
    //    })
   
    // res.send('Estou <b>bem</b>') pode retornar html, mas nao é normal
*/


app.listen(3000, () => {
    console.log("Backend executando...")
})