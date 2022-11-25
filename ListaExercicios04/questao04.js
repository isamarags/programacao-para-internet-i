//4 Escreva uma função calcula que receba um array e retorne um objeto contendo a soma e a média aritmética de todos seus elementos. Por exemplo, calcula( [4, 8, 20, 6] ), deve retornar o objeto { soma: 38, media: 9.5 }. A função deve funcionar para arrays de qualquer tamanho.

function calcula(valor){
  let soma = 0;
  
  for (let i in valor) {
  soma += valor[i];
  }

  media = soma/valor.length;
  
  console.log(soma);
  console.log(media);
}

calcula( [4, 8, 20, 6] );