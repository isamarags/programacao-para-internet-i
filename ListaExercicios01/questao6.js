let valor1 = process.argv[2];
let valor2 = process.argv[2];
let valor3 = process.argv[2];

if((valor1 > valor2)&& (valor1>valor3)) {
    console.log('Maior:' + valor1);
} else if((valor2>valor1) && (valor2 > valor3)) {
    console.log('Maior:' + valor2);
} else {
    console.log('Maior:' + valor3);
}