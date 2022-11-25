/**
 * 5. [1,6 ponto] Escreva uma função chamada calculaAreas que receba um array parecido com o da questão anterior e retorne um array contendo todas as áreas.

Por exemplo, o código

let areas = calculaAreas(imagens);
console.log(areas);
Deve resultar em:

[ 20000, 1000, 6000 ]
 */

let imagens = [
  { url: 'ifb.png', altura: 200, largura: 100  },
  { url: 'cbra.png', altura: 20, largura: 50  },
  { url: 'tsi.png', altura: 150, largura: 40  }
];

  // método map mapeia todos os elementos de dentro do array 
  let areas = imagens.map(
    function(elemento){
      return elemento.altura * elemento.largura
    }
  )

  console.log(areas);