let EdadesAleatorias = cantidadEdades => {
    let edades = []
    let max = 50
    for(let i = 0; i < cantidadEdades; i++){
        edades[i] = Math.floor(Math.random() * max)
    }
    return edades
}

let OrganizarEdades = edadesACalificar => {
    edadesACalificar.sort(function(a, b) {
        return b - a;
    })
    return edadesACalificar
}

let EdadesRepetidas = edadesOrganizadas => {
    if (edadesOrganizadas[0] === edadesOrganizadas[1]) {
      let repeticiones = 2
      for (let i = 2; i < edadesOrganizadas.length; i++) {
        if (edadesOrganizadas[i] === edadesOrganizadas[0]) {
          repeticiones++
        } else {
          return repeticiones
        }
      }
      return repeticiones
    } else {
      return 0
    }
  }

let edadMayor = OrganizarEdades(EdadesAleatorias(10))
let edadMayorRepetida = EdadesRepetidas(edadMayor)

console.log(`Las edad mayor es: ${edadMayor[0]} y se repite ${edadMayorRepetida} veces`)