/*
9. Recrie o objeto composto familias do slide 17 da aula, partindo apenas de objetos vazios (let xxx = {}) e acrescentando as propriedades uma a uma, de modo a obter exatamente o mesmo resultado final.

let familias = {
Flintstones: {
 pai: 'Fred',
 amigo: 'Barney'
 },
Jetsons: {
 pai: 'George',
 mae: 'Jane',
 filho: 'Elroy'
 },
Simpsons: {
 pai: 'Homer',
 mae: 'Marge',
 filho: 'Bart'
 }
};
*/

let familias = {};

familias.Flinstones = {};
familias.Jetsons = {};
familias.Simpsons = {};

familias.Flinstones.pai = 'Fred';
familias.Flinstones.amigo = 'Barney';


familias.Jetsons.amigo = 'George';
familias.Jetsons.mae = 'Jane';
familias.Jetsons.filho = 'Elro';

familias.Simpsons.pai = 'Homer'; 
familias.Simpsons.mae = 'Marge';
familias.Simpsons.filho = 'Bart';

for (let n in familias) {
  console.log(` Familias ${familias[n]}`);
  for (const m in familias[n]) {
    console.log(`Valor: ${m}`);
    }
}