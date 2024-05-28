
function contarCaracteres() {
    var texto = document.getElementById('texto').value;
    var numeroCaracteres = texto.length;
    var mensagem = "Número de caracteres: " + numeroCaracteres;
    document.getElementById('contador').innerText = mensagem;
    
}
