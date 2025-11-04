let intervalo = null;

function ligar (cor){
    desligar()
    document.getElementById(cor). classList.add(cor);
}

function desligar (){
    document.getElementById("vermelho").classList.remove("vermelho");
    document.getElementById("verde").classList.remove("verde");
    document.getElementById("amarelo").classList.remove("amarelo");
}

function automatico() {
    let sequencia = ["verde", "amarelo", "vermelho"];
    let index = 0;
    
    intervalo = setInterval(() => {
        ligar(sequencia[index]);
        index = (index+ 1) % sequencia.length;
    }, 2000);
}
 function mudarCor() {
        ligar(sequencia[index]);
        intervalo = setTimeout(() => {
            index = (index + 1) % sequencia.length;
            mudarCor();
        }, tempos[index]);
    }
    mudarCor();

function intermitente() {
    desligar();
    intervalo = setInterval(() => {
        document.getElementById('amarelo').classList.toggle('amarelo');
    }, 1000);
}

function ligaLed(cor){
    clearInterval(intervalo);
    ligar(cor);
}

function desligarAutomatico(){
    clearInterval(intervalo);
    intervalo = null;
    desligar();
}
