const notas = [7.7, 5.3, 6.5, 8.9, 3.6, 7.1, 9.0]

//without callback
let notasBaixas1 = []
for (const i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1);

//with callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
});
console.log(notasBaixas2);
const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3);


