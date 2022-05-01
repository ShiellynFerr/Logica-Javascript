const btnIncrementar$ = document.getElementById('btn-incrementar');
const btnDecrementar$ = document.getElementById('btn-decrementar');
const btnZerar$ = document.getElementById('btn-zerar');

const p$ = document.getElementById('contador');


let contador = 0;
p$.innerHTML = contador;

btnIncrementar$.addEventListener('click', function(){

    p$.innerHTML = ++contador;
    console.log('clicou');
});

btnZerar$.addEventListener('click', function(){

    p$.innerHTML = contador = 0;
});

btnDecrementar$.addEventListener('click', function(){

    p$.innerHTML = --contador;
});

console.log(btnIncrementar$);