/*2. Escreva um script que resulte na saída abaixo, construída a partir do array da questão anterior, usando a estrutura for(... ; ... ; ...). Depois refaça o mesmo loop de mais duas maneiras, usando for ... in e for ... of.

- ciano
- verde
- amarelo
 */

let array = ['ciano', 'verde', 'amarelo'];

 for (let i = 0; i < array.length; i++) {
   console.log(`- ${array[i]}`); 
 }

 for (const i in array) {
   console.log(`- ${array[i]}`);
 }

 for (const i of array) {
  console.log(`- ${i}`);
 }