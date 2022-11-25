//4. Escreva uma função chamada obterDescricao que receba um objeto livro e retorne uma string com uma descrição do livro (ex.: "Dom Casmurro, autor: Machado de Assis, 256 páginas"). Teste a função passando como parâmetros ao menos dois objetos diferentes.

function obterDescricao() {
    let livro = {
        titulo: 'Percy Jackson e os Olimpianos',
        autor: 'Rick Riordan',
        paginas: 1816,
        }

        return `${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`;
    }

console.log(obterDescricao());