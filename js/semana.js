function semana() {
    let n1 = Number(window.prompt('Digite um número:'))

    switch(n1) {
        case 1: window.alert("domingo");
        break;
        case 2: window.alert("Segunda-feira");
        break;
        case 3: window.alert("Terça-feira");
        break;
        case 4: window.alert("Quarta-feira");
        break;
        case 5: window.alert("Quinta-feira");
        break;
        case 6: window.alert("Sexta-feira");
        break;
        case 7: window.alert("Sábado");
        break;
        default: window.alert("Dia da semana inválido!")
    }
}