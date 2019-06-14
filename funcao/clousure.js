//closure is the scope created where a function is declared
//that scope allows that function access and manipulate external variables of the function
//some exemplos

//lexicon contex in action
const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());
