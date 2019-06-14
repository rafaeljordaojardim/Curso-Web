const pessoa = {
    saudacao: 'Bom dia',
    falar(){//creating directaly
        console.log(this.saudacao);
    }
}

pessoa.falar()

const falar = pessoa.falar

falar()//conflicated between paradgmaans : Functional and OO

const falarDePessoa = pessoa.falar.bind(pessoa)//the contex always will receive this whose calls
falarDePessoa()