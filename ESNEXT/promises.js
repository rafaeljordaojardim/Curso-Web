//representa uma ação assincrona

function falar(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        },segundos * 1000)
    })
}

falar(10, 'Que legal')
    .then(frase => frase.concat('?!?'))//passa a primeira para o then
    .then(outraFrase => console.log(outraFrase))//recevbe do then
    //.catch(e => console.log(e))tratando erro aqui

    console.log('vamor ver');
    