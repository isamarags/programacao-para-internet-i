// 9. Escreva uma função que receba um array bidimensional e escreva-o na tela como uma tabela com linhas e colunas separadas por tabulação ("\t").

// Por exemplo, para o array do slide 19, o resultado deve ser:

// Fred    Barney
// George  Jane    Elroy
// Homer   Marge   Bart


let familias = [
  ["Fred", "Barney"],
  ["George", "Jane", "Elroy"],
  ["Homer", "Marge", "Bart"]
];

function arrBidimensional(valor){
  for(let i of valor){
      console.log('')
      for(let valor of i ){
          process.stdout.write(valor + '\t')
      }
  }
  console.log('')
}

arrBidimensional(familias)

