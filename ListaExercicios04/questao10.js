//10. Escreva uma função que receba um array de objetos como o do slide 20 e escreva na tela de forma organizada todas as 
//informações que ele contém.

let usuarios = [
  {
      nome: 'Rodrigo Melo Fernandes',
      email: 'rodrigo1999@zzzmail.com',
      categorias: ['premium', 'admin', 'proprietario'],
  },
  {
      nome: 'Letícia Goncalves Azevedo',
      email: 'lga@dayrep.com',
      categorias: ['admin'],
  },
  {
      nome: 'Pedro Almeida Oliveira',
      email: 'poliv3@armyspy.com',
      categorias: ['premium', 'promocao'],
  }
];


function escreverOb(usuarios) {
  let i = 0
  for (let objeto of usuarios) {
      console.log(`Usuario: ${i++}`)
      console.log(`\t Nome:${objeto.nome}`)
      console.log(`\t E-mail:${objeto.email}`)
      console.log(`\t Categorias:`)
      for (let cat of objeto.categorias) {
          console.log("\t\t" + cat)
      }
      console.log("")
  }
}



escreverOb(usuarios)
