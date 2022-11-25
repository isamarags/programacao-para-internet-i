/*
Escreva uma função chamada potencia, com um parâmetro obrigatório, n, e outro opcional, x. Caso x não seja especificado na chamada, a função deve retornar n^2; caso seja, deve retornar n^x.

Por exemplo, o código:

console.log( potencia(2) );
console.log( potencia(3) );
console.log( potencia(3,4) );
console.log( potencia(2,10) );
Deve resultar em:

4
9
81
1024
*/

function potencia(n, x = 2) {
  return Math.pow(n, x);
}

console.log(potencia(2));
console.log(potencia(3));
console.log(potencia(3,4));
console.log(potencia(2,10));