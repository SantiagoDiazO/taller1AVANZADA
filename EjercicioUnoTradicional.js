function MedirDistancia(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2)
}

let distanciaCalculada = MedirDistancia(2, 1, 8, 5)

console.log(`La distancia calculada fue de ${distanciaCalculada} UA`)