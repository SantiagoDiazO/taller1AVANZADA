let CalcularSalario = licenciasVendida => {
    let comision = licenciasVendida * 1500000
    let salarioBruto = (3500000 + comision)
    let deducciones = (3500000 + comision) * (5 / 100)
    let salario = salarioBruto - deducciones

    console.log(`El salario del vendedor es de: ${salario}`)
}

let salarioTrabajador = CalcularSalario(3)