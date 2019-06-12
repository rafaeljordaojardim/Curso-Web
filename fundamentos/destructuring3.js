function rand({min = 0, max = 1000}){//it extracts of the objeto
    const valor = Math.random() * (max - min) + min//a random number
    return Math.floor(valor)
}

const obj = {max :50, min:40}//creating an object with max and min
console.log(rand(obj))
console.log(rand({min:955}))//passing only min, and it will get the pattern
console.log(rand({}))