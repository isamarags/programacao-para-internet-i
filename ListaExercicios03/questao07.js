/**
 * 7. Partindo do código anterior, transforme as três funções em métodos de um dos objetos.

De modo que o seguinte código:

contaX.deposita(800);
console.log(contaX.nome, contaX.saldo);

contaX.retira(500);
console.log(contaX.nome, contaX.saldo);

contaX.transferePara(contaY, 1000);
console.log(contaX.nome, contaX.saldo);
console.log(contaY.nome, contaY.saldo);
Resulte em:

José Fontes 1800
José Fontes 1300
José Fontes 300
Felipe Silva 4000
 * 
 */

let contaX = {
    nome: 'José Fontes',
    saldo: 1000,
    deposita: function(valor){
    this.saldo += valor;
    },

    retira: function(valor){
    this.saldo -= valor;
    },

    transferePara: function(conta2, valor){
    this.saldo += valor;
    conta2.saldo -= valor;
    }
}

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000
}

contaX.deposita(800);
console.log(contaX.nome, contaX.saldo);

contaX.retira(500);
console.log(contaX.nome, contaX.saldo);

contaX.transferePara(contaY, 1000);
console.log(contaX.nome, contaX.saldo);
console.log(contaY.nome, contaY.saldo);