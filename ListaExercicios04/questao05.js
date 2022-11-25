//5 Modifique a função anterior para que ela seja chamada com um número variável de argumentos numéricos, ao invés de um array. Por exemplo, calcula(4, 8, 20, 6), deve retornar o objeto { soma: 38, media: 9.5 }.

function calcula(...valor){
  let soma = 0;
  
  for (let i in valor) {
  soma += valor[i];
  }

  media = soma/valor.length;
  
  console.log(soma);
  console.log(media);

}

calcula(4, 8, 20, 6)