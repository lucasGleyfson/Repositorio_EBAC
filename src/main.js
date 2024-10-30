document.addEventListener('DOMContentLoaded', function() {
    let contador = 0;

    document.getElementById('contador-botao').addEventListener('click', function() {
        contador++;
        document.getElementById('contador-valor').innerText = contador;
    });
});