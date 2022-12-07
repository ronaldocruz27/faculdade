function num() {
   
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 1;
    let contador = 0;


    while (contador < 20) {
        let n = Number(window.prompt('digite um numero: '))

        if (n <= 100) {
            n1 = n1 + n4;
        } else if ((n > 100) && (n <= 200)) {
            n2 = n2 + n4;
        } else {
            n3 = n3 + n4;
        }
        contador++;
    }
    let res = document.getElementById('nt')
    res.innerHTML  = `<p>quantidade de números até 100 é:<mark>${n1}</mark></p>`
    res.innerHTML += `<p>quantidades de números entre 101 a 200 é:<mark>${n2}</mark></p>`
    res.innerHTML += `<p>quantidade de números acima de 201 é:<mark>${n3}</mark></p>`

}
