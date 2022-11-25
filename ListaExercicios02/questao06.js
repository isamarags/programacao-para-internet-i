//6. Escreva uma função para calcular a área de um círculo, dado o raio. Se o raio for negativo, deve ser retornado o valor 0. Dica: Use Math.PI para obter o valor de π.

function areaCirculo(raio){
  if(raio < 0) {
    return 0;
  }
  return Math.PI * Math.pow(raio, 2);
}

console.log(areaCirculo(9));