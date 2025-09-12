let guardaRoupas = []

function addRoupa(array,valor){
   return array.push(valor)
}

function removerTopo(array){
    return array.pop()
}

function verTopo(array){
   return array[1]
}

console.log(addRoupa(guardaRoupas,"camisa do Neymar"))
console.log(addRoupa(guardaRoupas,"camisa do jiu-jitsur"))

console.log(removerTopo(guardaRoupas))

console.log(verTopo(guardaRoupas))
