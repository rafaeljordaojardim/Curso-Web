const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
}

//functions knows where it was declarated
//it never forget your origin
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()