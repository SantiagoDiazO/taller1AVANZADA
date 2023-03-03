let medirDistancia = (x1, y1, x2, y2)=>Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2)

let distanciaCalculada = medirDistancia(2, 1, 8, 5)
console.log(`La distancia calculada fue de ${distanciaCalculada} UA`)