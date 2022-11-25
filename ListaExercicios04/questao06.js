// 6. Escreva uma função somaArrays, a qual receba dois arrays de mesmo tamanho (qualquer) e retorne um array, também de mesmo tamanho, 
// em que cada elemento é a soma dos valores correspondentes das entradas.

// Por exemplo, se:

// let a = [ 4, 5, 10 ];
// let b = [ 2, 3, 8 ];
// A chamada de somaArrays(a,b) deve retornar o array [ 6, 8, 18 ].


function somaArrays(a, b) {
  let soma;
  let resultado = [];
  for (soma in a) {
      resultado.push(a[soma] + b[soma]);
  }
  return resultado;
}

let a = [4, 5, 10];
let b = [2, 3, 8];

console.log(somaArrays(a, b))