function salvar(req, res) {
    res.send('Usuário > Salvar')
}

function obter(req, res) {
    res.send('Usuário > obter')
}

module.exports = { salvar : salvar, obter : obter}