/*7. [2 pontos] Usando o código da questão anterior, crie uma classe Filme, cujo construtor receba 3 parâmetros que especificam propriedades internas: título (string), diretor (string) e atores (array de objetos Ator).

Crie um método adicionaAtor(ator) que acrescenta um objeto dado ao array interno de atores, e um método escreveDescricao() que escreve na tela uma listagem como a do exemplo abaixo.

Por exemplo, o código:

let uma = new Ator('Uma Thurman');
let pulp = new Filme(
    'Pulp Fiction', 'Quentin Tarantino', [ uma, new Ator('John Travolta') ]
);
pulp.adicionaAtor(new Ator('Samuel L. Jackson'));

pulp.escreveDescricao();
Deve resultar em algo como:

"Pulp Fiction", diretor: Quentin Tarantino
Elenco:
- Uma Thurman
- John Travolta
- Samuel L. Jackson
*/

//Usando o código da questão anterior,
class Ator {
  constructor(nome) {
    this.nome = nome;
  }

  obterNome() {
    return this.nome;
  }
}

//crie uma classe Filme, cujo construtor receba 3 parâmetros que especificam propriedades internas: título (string), diretor (string) e atores (array de objetos Ator).
class Filme {
  constructor(titulo, diretor, atores) {
    this.titulo = titulo
    this.diretor = diretor
    this.atores = atores
  }

//Crie um método adicionaAtor(ator) que acrescenta um objeto dado ao array interno de atores
  adicionaAtor(ator) {
    this.atores.push(ator);
  }

  // e um método escreveDescricao() que escreve na tela uma listagem 
  escreveDescricao() {
    console.dir(`"${this.titulo}", diretor: ${this.diretor}`);
    console.dir('Elenco:');

  // Loop para escrever o nome de cada ator adicionado linha por linha
    for (let ator of this.atores) {
      console.dir(`- ${ator.obterNome()}`);
    }
  }
}
//teste
let anne = new Ator('Anne Hathaway')
let uma = new Ator('Uma Thurman');
let pulp = new Filme(
  'Pulp Fiction', 'Quentin Tarantino', [uma, new Ator('John Travolta'), anne]
);
pulp.adicionaAtor(new Ator('Samuel L. Jackson'));

pulp.escreveDescricao();