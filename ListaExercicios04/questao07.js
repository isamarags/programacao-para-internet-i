//7. Escreva uma função ehPalindromo que receba uma string e retorne um valor booleano (true ou false), dependendo se a string é ou não idêntica quando lida de trás para frente.

function ehPalindromo(string) { 
  let valorInvertido = string.split('').reverse().join('');
  console.log(valorInvertido)
  if (string == valorInvertido) {
    return true;    
  } else{ 
    return false;
  }
}

console.log(ehPalindromo('arara'))