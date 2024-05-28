function validarNumeroPositivo() {
    var valor =
    document.getElementById('numero').value;
    var numero = parseFloat(valor);
    var mensagem;

    if (!isNaN(numero) && numero > 0) {
       console.log (`O número é positivo.`);
        
    } else {
        console.log (`Erro: Por favor, insira um número positivo.`);
    }
    
    }
