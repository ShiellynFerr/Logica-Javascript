function pulaLinha() {

    document.write("<br>")
}


function mostra(mensagem) {

pulaLinha();
document.write(mensagem);
pulaLinha();
}

let vitorias = parseInt(prompt('Entre com o número de vitórias: '));
let empates = parseInt(prompt('Entre com o número de empates: '));

let pontos = vitorias * 3 + empates;
mostra(`Os pontos do seu time são: ${pontos}`);

if(pontos > 28) {

   mostra(`Seu time está melhor do que no ano passado`);
}

if(pontos < 28) {

    mostra(`Seu time está pior do que no ano passado`);
}


if (pontos === 28) {

    mostra(`Seu time está igual ao ano passado `);
}

