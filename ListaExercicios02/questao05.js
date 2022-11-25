//5. Escreva uma função que receba uma temperatura em Fahrenheit e retorne o valor em Celsius. Modifique a questão 9 da lista anterior para chamar essa função dentro do loop ao construir a tabela.

function converterValorC(f) {
  // c = f - 32 / 1,8
  return (5/9) * (f - 32);
}

for (let i=-50; i<=50; i+=5) {
  let result = Math.round(converterValorC(i))
  console.log(`Temperatura em Fahrenheit: ${i}, temperatura em Celsius: ${result}`)
}