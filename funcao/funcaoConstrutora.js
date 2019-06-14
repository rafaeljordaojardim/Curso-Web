function Carro(velocidadeMaxima = 200, delta = 5) {
    //ptivate attibute
    let velocidadeAtual = 0

    //public method
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }


    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
    //this is responsability to set visible the method or variable
    //let const and var set it private
}//end class

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(400, 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);//funcrtion
console.log(typeof ferrari);//object


