// 7. Escreva uma função chamada ehPrimo que receba um número e retorne se esse número é primo ou não. Utilize a chamada dessa função em um loop para listar todos os números primos entre 2 e 30.

function numeroPrimo(valor) {
  for (let i = 2; i <= valor-1; i++) {
    if (valor % i === 0) { 
      return false; 
    }
  }

  return true;
}

for (let index = 2; index <= 30; index++) {
  if(numeroPrimo(index)){
    console.log(index);
  } 
}