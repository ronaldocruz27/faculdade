const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
    if (altura.value != '' && peso.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 20) {
            classification = 'Você está abaixo do peso!'
        } else if (imc < 25) {
            classification = 'Você está com o peso normal!'
        } else if (imc < 30) {
            classification = 'Você está com sobre peso!'
        } else if (imc < 40) {
            classification = 'Você está obeso!'
        } else {
            classification = 'Você está com obesidade mórbidade!'
        }
        resultado.innerHTML = `IMC: ${imc} (${classification})`
    }
}
