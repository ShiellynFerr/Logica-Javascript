// Dado um inteiro n, retorne uma string

//Fizzbuz se divide por 3 e por 5.
//Fizz se divide por 3.
//Buzz se divisivel por 5.
//o inteiro(as string) se nenhuma condição for verdadeira

//Forma mais simples para resolver

function FizzBuzz(n) {
    if(n % 3 === 0 && n % 5 === 0)
{
  return 'FizzBuzz'
} else if(n % 3 === 0) {
    return 'Fizz'
} else if (n % 5 === 0) {
    return 'Buzz'
} else {
    return n.toString()
}

};


//Forma mais criativa para responder

function createLogger(divisor, msg) {
  return (n) => (n % divisor === 0 ? msg : '');
}

const divBy3 = createLogger(3, 'fizz');
const divBy5 = createLogger(5, 'Buzz');

for(let i = 1; i <= 20; i++) {
    console.log(divBy3(i) + divBy5(i) || i);
}