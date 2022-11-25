//2. Modifique a função da questão anterior para que a função aceite um argumento e concatene o valor desse argumento à frase escrita na saída. Na chamada, passe o valor da variável de loop como argumento.

function escreverFrase(valor) {
  console.log('Teste da função ' + valor);
}

for(let i = 1; i <= 3; i++) {
  escreverFrase(i);
}