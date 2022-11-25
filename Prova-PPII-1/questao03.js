/**
 * 3. [1,4 ponto] Escreva uma função chamada geraTag que receba como único parâmetro um objeto contendo as propriedades url, altura e largura e retorne uma string com a tag HTML para imagem correspondente.

Por exemplo: O seguinte código:

let obj = { 
    url: 'ifb.png', 
    largura: 200, 
    altura: 100 
};

console.log( geraTag(obj) );
Deve resultar em:

<img src="ifb.png" width="200" height="100">
 */

function geraTag() {
  obj = {
    url: 'ifb.png',
    largura: 200,
    altura: 100
  }

  for (const i in obj) {
    return `<img src="${obj.url}" width="${obj.largura}" height="${obj.altura}">`
  }
  
}

geraTag({
  url: 'ifb.png',
  largura: 200,
  altura: 100
  })

console.log(geraTag(obj));