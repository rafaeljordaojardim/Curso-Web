//é uma unica instancia, ou seja muda em um muda em todos
//se o objeto ja estiver sido criado ele retorna a mesma instancia
const contadorA = require('./instanciaUnica')//compartilha o mesmo
const contadorB = require('./instanciaUnica')

//instancias diferentes
const contadorC = require('./instanciaNova')()//invocando a funcao factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);

