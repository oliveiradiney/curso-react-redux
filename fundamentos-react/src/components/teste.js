function sum(a,b){
    return a + b
}

console.log(sum(3,4))

function gerarNumeroNaoContido(min, max, array){
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min 
    return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
}
console.log(gerarNumeroNaoContido(1, 60, [15,49,27,30,26,58]))