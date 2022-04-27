
function pulaLinha() {

    document.write("<br>")
    document.write("<br>")
}

function mostra(mensagem) {

    pulaLinha();
    document.write(mensagem);
    pulaLinha();
 }


 function calculaImc (peso, altura) {
    return peso / (altura * altura);

 }
 let totalImc = calculaImc(47, 1.57) + calculaImc(80, 1.90);
 document.write("A soma dos Imc's é " + totalImc);

 let nome = prompt('Informe o seu nome: ')
 let alturaInformada = prompt( nome + ' Qual é a sua altura?');
 let pesoInformado = prompt( nome + ' Qual é o seu peso?');

 pulaLinha()

 let imc = calculaImc(pesoInformado, alturaInformada);
 document.write('O imc calculado é: ' + imc)