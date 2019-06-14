//IIFE -> immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora');
    console.log('foge do escopo mais abrangente');
        
})()
//usado para fugir do escopo global

console.log('Será executado na hora');
console.log('foge do escopo mais abrangente');

//the two codes above are similars