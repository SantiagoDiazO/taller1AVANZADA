let alimentos = [
    { 
        nombre: 'Pollo', 
        tipo: 'animal', 
        nivelEnergia: 220 
    },
    { 
        nombre: 'Brócoli', 
        tipo: 'vegetal', 
        nivelEnergia: 30 
    },
    { 
        nombre: 'Salmón', 
        tipo: 'animal', 
        nivelEnergia: 200 
    },
    { 
        nombre: 'Zanahoria', 
        tipo: 'vegetal', 
        nivelEnergia: 25 
    },
    { 
        nombre: 'Almendras', 
        tipo: 'vegetal', 
        nivelEnergia: 580 
    },
    { 
        nombre: 'Langosta', 
        tipo: 'animal', 
        nivelEnergia: 130 
    },
    { 
        nombre: 'Espinacas', 
        tipo: 'vegetal', 
        nivelEnergia: 15 
    },
    { 
        nombre: 'Grillos', 
        tipo: 'insecto', 
        nivelEnergia: 75 
    },
    { 
        nombre: 'Tofu', 
        tipo: 'vegetal', 
        nivelEnergia: 120 
    },
    { 
        nombre: 'Ternera', 
        tipo: 'animal', 
        nivelEnergia: 250 
    }
]

function ClasificarAlimentos(alimentos, SumatoriaEnergia) {
    setTimeout(function() {
      let alimentosVegetales = alimentos.filter(function(alimento) {
        return alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200
      })
      SumatoriaEnergia(alimentosVegetales)
    }, 5000)
}

ClasificarAlimentos(alimentos, function(alimentosVegetales){
    let sumatoria = 0
    for (let i = 0; i < alimentosVegetales.length; i++) {
        sumatoria += alimentosVegetales[i].nivelEnergia
    }
    console.log(`El total de energia consumido por grogu es de: ${sumatoria}`)
})