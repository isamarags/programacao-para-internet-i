// 11. Escreva uma função somaMatrizes que receba dois arrays bidimensionais de mesmo tamanho contendo números e retorne outro array bidimensional contendo a soma dos anteriores.

// Por exemplo, se:

// let a = [ [4,5,6], [10,20,30] ];
// let b = [ [1,2,3], [5,8,20] ];
// A chamada de somaMatrizes(a,b) deve retornar [ [ 5, 7, 9 ], [ 15, 28, 50 ] ].


function somaMatrizes(a, b) {
  let vetor1=[a]
  let vetor2=[b]
  let soma=[]

  for(let i=0; i<=vetor1.length; i++){
      console.log(a[i])
      console.log(b[i])
      for(let p=0;p<=a[i];p++){
          console.log(a[p])
       }
  }
  
}

let a = [[4, 5, 6], [10, 20, 30]];
let b = [[1, 2, 3], [5, 8, 20]];

somaMatrizes(a, b)
