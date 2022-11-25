//4. Modifique a resposta anterior para que a chamada de função receba parâmetros passados na linha de comando.
let numeroUm = parseInt(process.argv[2]);
let numeroDois = parseInt(process.argv[3]);
let numeroTres = parseInt(process.argv[4]);

function media3(numeroUm, numeroDois, numeroTres) {
  return (numeroUm + numeroDois + numeroTres) / 3;
}

console.log(media3(numeroUm, numeroDois, numeroTres));