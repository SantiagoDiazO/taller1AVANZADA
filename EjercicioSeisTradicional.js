function EdadesAleatorias(cantidadEdades){
    let edades = []
    let max = 50
    for(let i = 0; i < cantidadEdades; i++){
        edades[i] = Math.floor(Math.random() * max);
    }
    return edades
}

function CodigosAleatorios(cantidadCodigos){
    let codigos = []
    let max = 1000
    for(let i = 0; i < cantidadCodigos; i++){
        codigos[i] = Math.floor(Math.random() * max);
    }
    return codigos
}

function OrganizarEdades(edadesACalificar){
    edadesACalificar.sort(function(a, b) {
        return b - a;
    });
    return edadesACalificar
}

function EdadesRepetidas(edadesOrganizadas){
    let repeticiones = {}
    edadesOrganizadas.forEach(edad => {
        if (repeticiones[edad]) {
            repeticiones[edad]++;
        } else {
            repeticiones[edad] = 1;
        }
    })
    return repeticiones
}

let edadesOrganizadas = OrganizarEdades([1, 2, 2, 3, 4, 5, 5, 5, 6, 7])
let edadesRepetidas = EdadesRepetidas(edadesOrganizadas)

console.log(`Las edades son: ${edadesOrganizadas} y las repetidas son: ${edadesRepetidas}`)