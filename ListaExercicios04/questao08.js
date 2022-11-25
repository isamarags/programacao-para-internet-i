/*
8. Escreva uma função inverte que retorna o inverso de uma string dada. Utilize métodos de string e array, sem nenhuma estrutura de loop.

Ex.: O resultado de inverte('Abacaxi') deve ser ixacabA. */

function inverte(string) {
  let valorInvertido = string.split('').reverse().join('');
  console.log(valorInvertido)
}

inverte('Abacaxi')