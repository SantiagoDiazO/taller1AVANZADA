function CalcularDistancia(distancias) {
    let masCercano = distancias[0];

    for (let i = 1; i < distancias.length; i++) {
      if (Math.abs(distancias[i]) < Math.abs(masCercano)) {
        masCercano = distancias[i];
      } else if (Math.abs(distancias[i]) === Math.abs(masCercano) && distancias[i] > masCercano) {
        masCercano = distancias[i];
      }
    }

   return {numeroMasCercano: masCercano, distancia: Math.abs(masCercano)};
}

let distanciaCalculada = CalcularDistancia([1, 2, -5, -1, 4, -9])
console.log(`El numero mas cercano es ${distanciaCalculada.numeroMasCercano} y esta a una distancia de ${distanciaCalculada.distancia}`)