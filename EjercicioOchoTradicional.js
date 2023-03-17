let planetas = [
    {
        nombrePlaneta: "Mercurio",
        latitud: 46.2,
        longitud: 87.4,
        nivelOxigeno: 5,
        volumenAgua: 0
    },
    {
        nombrePlaneta: "Venus",
        latitud: 34.5,
        longitud: 123,
        nivelOxigeno: -2,
        volumenAgua: 50
    },
    {
        nombrePlaneta: "Tierra",
        latitud: 241.5,
        longitud: 351,
        nivelOxigeno: -45,
        volumenAgua: 120
    },
    {
        nombrePlaneta: "Marte",
        latitud: -15,
        longitud: 67.2,
        nivelOxigeno: 35,
        volumenAgua: 35
    },
    {
        nombrePlaneta: "Jupiter",
        latitud: -21.7,
        longitud: 10.8,
        nivelOxigeno: 2,
        volumenAgua: 0
    },
    {
        nombrePlaneta: "Saturno",
        latitud: 3.3,
        longitud: 175,
        nivelOxigeno: 57,
        volumenAgua: 32
    },
    {
        nombrePlaneta: "Urano",
        latitud: -17.2,
        longitud: 57.9,
        nivelOxigeno: 12,
        volumenAgua: 324
    },
    {
        nombrePlaneta: "Neptuno",
        latitud: -16,
        longitud: 149,
        nivelOxigeno: -8,
        volumenAgua: 52
    },
    {
        nombrePlaneta: "Plutón",
        latitud: 17.1,
        longitud: 113.8,
        nivelOxigeno: 341,
        volumenAgua: 36
    },
    {
        nombrePlaneta: "Kepler-452b",
        latitud: -10.5,
        longitud: -158.3,
        nivelOxigeno: 856,
        volumenAgua: 0
    },
    {
        nombrePlaneta: "HD 40307g",
        latitud: -36,
        longitud: 224,
        nivelOxigeno: 65,
        volumenAgua: 352
    },
    {
        nombrePlaneta: "Proxima Centauri b",
        latitud: -8,
        longitud: 46,
        nivelOxigeno: 52,
        volumenAgua: 867
    },
    {
        nombrePlaneta: "TRAPPIST-1d",
        latitud: -57.6,
        longitud: 60.9,
        nivelOxigeno: -1,
        volumenAgua: 64
    },
    {
        nombrePlaneta: "LHS 1140b",
        latitud: 12.3,
        longitud: 18,
        nivelOxigeno: 0,
        volumenAgua: 236
    },
    {
        nombrePlaneta: "K2-18b",
        latitud: 133,
        longitud: 35.5,
        nivelOxigeno: 52,
        volumenAgua: 0
    }
]

function SumarVolumenAgua(planetas) {
    let totalVolumenAgua = 0
  
    for(let i = 0; i < planetas.length; i++) {
        totalVolumenAgua += planetas[i].volumenAgua
    }
  
    return totalVolumenAgua
}

function SumarNivelOxigeno(planetas) {
    let totalNivelOxigeno = 0
  
    for(let i = 0; i < planetas.length; i++) {
        totalNivelOxigeno += planetas[i].nivelOxigeno
    }

    totalNivelOxigeno = totalNivelOxigeno * 100

    return totalNivelOxigeno
}

function ComprobarNivelOxigeno(planetas){
    for (let i = 0; i < planetas.length; i++) {
        let planeta = planetas[i]
        if (planeta.nivelOxigeno < 0) {
            console.log(planeta)
        }
    }
}

function ComprobarVolumenAgua(planetas){
    for (let i = 0; i < planetas.length; i++) {
        let planeta = planetas[i]
        if (planeta.volumenAgua <= 0) {
            console.log(planeta)
        }
    }
}

let sumaVolumenAgua = SumarVolumenAgua(planetas)
let sumaNivelOxigeno = SumarNivelOxigeno(planetas)

console.log(`La cantidad total de agua de los 15 planetas es de ${sumaVolumenAgua}`)
console.log(`La cantidad de oxigeno de los 15 planetas es de ${sumaNivelOxigeno}`)
console.log(`Los planetas sin oxigeno son: `)
ComprobarNivelOxigeno(planetas)
console.log(`Los planetas sin volumen de agua son: `)
ComprobarVolumenAgua(planetas)