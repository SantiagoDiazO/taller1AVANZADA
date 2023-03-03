let CalificarCodigosAcceso = codigo => {
    let codigoSeparado = codigo.split(":")
    return codigoSeparado[1]
}

let codigoAcceso = CalificarCodigosAcceso("ABC1234:Santiago")

console.log(`El nombre del piloto es: ${codigoAcceso}`)