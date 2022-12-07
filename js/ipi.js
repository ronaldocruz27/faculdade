function calculo() {
    let valt = (((val1.value*quan1.value)+(val2.value*quan2.value))*(ipi.value/100+1)).toFixed(2);

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Relatório das Peças</p>`
    resultado.innerHTML += `<p>Valor do IPI: ${ipi.value}%</p>`
    resultado.innerHTML += `<p>Código da Primeira peça: ${cod1.value}</p>`
    resultado.innerHTML += `<p>Valor da Primeira peça: R$${val1.value}</p>`
    resultado.innerHTML += `<p>Quantidade da Primeira peça: ${quan1.value}</p>`
    resultado.innerHTML += `<p>Código da Segunda peça: ${cod2.value}</p>`
    resultado.innerHTML += `<p>Valor da Segunda peça: R$${val2.value}</p>`
    resultado.innerHTML += `<p>Quantidade da Segunda peça: ${quan2.value}</p>`
    resultado.innerHTML += `<p>O valor total a ser pago é: R$${valt}</p>`

}