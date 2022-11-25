//5. Escreva uma função chamada criaLivro que receba 3 parâmetros: título, autor e número de páginas e retorne um objeto livro com os respectivos valores.
// Teste o objeto criado, passando-o como parâmetro para a função da questão anterior.

function obterDescricao(livro) {
    return `${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`;
}


function criaLivro(titulo, autor, numPaginas) {
    let livro = {
        titulo: titulo,
        autor: autor,
        paginas: numPaginas
    };

return livro;

}

let novoLivro = criaLivro('Harry Potter', 'JK', '704')
console.log(obterDescricao(novoLivro));