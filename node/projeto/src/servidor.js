// precisa declarar uma porta
//alem do endereço precisa da porta, pra saber qual processo está rodando
//standard port is 80
//port is a process
const porta = 3003 

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const banco = require('./bancoDeDados')

//qualquer requsição ele vai usar esse tradutor desse dado
//transforma em objeto, 
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next)=> {
    res.send(banco.getProdutos())//converter para json
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//JSON
})
app.put('/produtos/:id', (req, res, next) =>{
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//JSON
})
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = banco.excluirProduto(req.params.id)
    res.send(produto)//JSON
})
/*
//use -  responde para qulauqer url
app.get('/produtos', (req, res, next)=> {
    res.send({nome:'notebook', preco:123.45})//converter para json
})*/
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
    
})