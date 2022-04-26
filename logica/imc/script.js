
function pulaLinha() {

    document.write("<br>")
}

function mostra(mensagem) {

    pulaLinha();
    document.write(mensagem);
    pulaLinha();
 }


 function calculaImc (peso, altura) {
    let imc = peso / (altura * altura);
    mostra('O imc calculado é ' + imc);
 }

 calculaImc(47, 1.57);
 calculaImc(80, 1.90);