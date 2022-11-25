/**
Escreva 3 funções: deposita(conta, valor), que acrescenta o valor especificado a uma conta; retira(conta, valor), que subtrai o valor especificado; e transfere(conta1, conta2, valor) que transfere dinheiro de uma conta a outra. Escreva código para testar as 3 funções usando os objetos acima.
 */

let contaX = {
    nome: 'José Fontes',
    saldo: 1000
};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000
}

function deposita(conta, valor) {
    // conta X
    conta.saldo += valor;
// 1000 += 500
// saldo = 1000 + 500
}

function retira(conta, valor) {
    conta.saldo -= valor;
}

function transfer(conta1, conta2, valor) {
    conta1.saldo += valor;
    conta2.saldo -= valor;
}

deposita(contaX, 500); // 1500
retira(contaY, 500); // 2500
transfer(contaX, contaY, 100); // 1600 X 2400 
console.log(contaX);
console.log(contaY);