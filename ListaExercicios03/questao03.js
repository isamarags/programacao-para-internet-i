//3. Modifique a questão anterior para percorrer o objeto com uma estrutura de loop e escrever na saída automaticamente todas as propriedades e valores, uma por linha.

let livro = {
  titulo: 'Percy Jackson e os Olimpianos',
  autor: 'Rick Riordan',
  paginas: 1816
}

for (const valor in livro) {
    console.log(`Propriedade: ${valor}, valor: ${livro[valor]}`);
}