


// Desafio: Receber um array com tamanho [n], vão iterar sobre o array
// e para cada posição do array vocês substituir o valor da posição atual
// pela multiplicação de todos os valores do array sem ser o valor atual
// Abaixo exemplos:

//entrada [1,2,3] -> passado pra funcao function desafio(array)
// [x,y, z]


// [5, 6, 7, 8, 9]
// [3024, 2250, 2160, 1890, 1680]


//Complexidade de Tempo: O(n²)
function desafio(array){
    resultado = []
    for(let i = 0; i < array.length; i++){
        for(let j=0; j < array.length; j++){
            if(i !== j) {
                resultado[i] = !resultado[i] ? array[j] : resultado[i] * array[j]
            };
        }
    }
    return resultado
} 
console.log(desafio([1, 2, 3]))
    
//O(n)
function produto(array) {
    const n = array.length
    let prefix = Array(n).fill(1)
    let suffix = Array(n).fill(1)
    let resultado = Array(n)

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * array[i - 1]
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * array[i + 1]
    }

    for (let i = 0; i < n; i++) {
        resultado[i] = prefix[i] * suffix[i]
    }

    return resultado
}
console.log(desafio([5, 6, 7, 8, 9]))