/**
 2. [1,4 ponto] Escreva uma função chamada soma que receba como único parâmetro um array contendo números e retorne a soma total destes. A função deve funcionar para arrays de qualquer tamanho.

Por exemplo: soma([3, 10, 2]) deve retornar o valor 15.
 */

function soma(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

console.log(soma([5, 850, 20]))