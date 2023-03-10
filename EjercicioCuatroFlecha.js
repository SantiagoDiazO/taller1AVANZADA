let DetectarSablesDefectuosos = energiaSables => {
    let sablesDefectuosos =  []
    for(let i = 0; i < energiaSables.length; i++){
        if(energiaSables[i] < 0){
            sablesDefectuosos.push(energiaSables[i])
            console.log(sablesDefectuosos)
        }
    }
    return sablesDefectuosos.length
}

let sablesDefectuosos = DetectarSablesDefectuosos([2,4,-8,5,-6])

console.log(`La cantidad de sables defectuosos con energía negativa fue de ${sablesDefectuosos} sables`)