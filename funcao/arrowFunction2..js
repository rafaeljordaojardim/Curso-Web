function Pessoa() {
    this.idade = 0
    //advantage arrow, this is not variable
    setInterval(() => {
        this.idade++
        console.log(this.idade);
        
    }, 1000)
}

new Pessoa