function soma() {
    let n = 1;
    let nt = 0;
    

    while(n!=0){
        n = Number(window.prompt('digite um numero: '))
        nt = nt + n;
        if(n<0){
            break;
        }
    }
    let res = document.getElementById('som')
    res.innerHTML = `<p>a soma dos números é:<mark>${nt}</mark></p>`
    res.innerHTML += `<p>Fim do programa</p>`

}
