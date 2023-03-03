function TemperaturaMedia(temperaturaMaxima, temperaturaMinima){
    return (temperaturaMaxima + temperaturaMinima) / 2
}

let temperaturaMedia = TemperaturaMedia(28, 32)

console.log(`La temperatura media de la luna es de ${temperaturaMedia}`)