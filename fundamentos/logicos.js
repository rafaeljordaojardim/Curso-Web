function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;//equivalente ao OU exclusivo
    const manterSaudavel = !comprarSorvete//operardor unario

    //quando passa o valor apena, sem a chave, ele ja usa este proprio nome nao precisa de chave:valor
    //faz internamente,
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}//compras

console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(false, false))
