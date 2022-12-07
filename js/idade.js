function idade() {
    let id = ((ano.value * 365) + (mes.value * 30) + dia.value)

    resultado.innerHTML = `Sua idade é ${id} dias`
}