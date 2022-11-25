/*
3. Sem modificar a linha inicial que cria o array com 3 elementos, use uma instrução com o método splice e outra com o método push, de modo a resultar no array que gera a seguinte saída:
let array = ['ciano', 'verde', 'amarelo'];
- ciano
- roxo
- laranja
- verde
- amarelo
- cinza
*/

let array = ['ciano', 'verde', 'amarelo'];
//.push - para adicionar ao final do array
//.splice - para remover
array.splice(1, 2, 'roxo');
array.push('laranja');
array.push('verde');
array.push('amarelo');
array.push('cinza');
console.log(array);