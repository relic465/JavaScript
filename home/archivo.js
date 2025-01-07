let elementoSegundos = document.getElementById('TiempoElegido').value;

function ComenzarTiempo(){
    setTimeout(tiempocumplido , 1000*elementoSegundos);
}
function tiempocumplido(){
    alert ('se termino el tiempo')
}