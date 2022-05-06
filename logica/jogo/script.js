function pulaLinha() {

    document.write("<br>")
    document.write("<br>")
}

function mostra(mensagem) {

    pulaLinha();
    document.write(mensagem);
    pulaLinha();
 }

 
 function sorteia(n) {

    return Math.round(Math.random() * n);
}    



 let numeroPensado = sorteia(10)
 let chute = parseInt(prompt('Digite seu chute'));

  (chute === numeroPensado) ? mostra(`Você acertou, você digitou ${chute} e o numero era realmente ${numeroPensado}!`)
  : mostra(`Você errou o numero pensado era: ${numeroPensado}!`);
 