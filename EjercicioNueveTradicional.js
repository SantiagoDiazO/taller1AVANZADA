function AsociarEstudiante(nombre, planeta, edad, estatura, SeleccionarActividad){
    setTimeout(() => {
        let padawan = {
            nombre: nombre,
            planeta: planeta,
            edad: edad,
            estatura: estatura
        }
        SeleccionarActividad(padawan)
    }, 2000)
}

AsociarEstudiante("Santiago", "Tierra", 19, 1.74, function(padawan){
    if(padawan.edad < 15){
        console.log("Manejo de fuerza")
    }else{
        console.log("Manejo del sable de luz")
    }
})