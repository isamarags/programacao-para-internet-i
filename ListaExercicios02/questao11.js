// 11. Escreva a função calc(op,a,b) em que o primeiro parâmetro define a operação a ser feita (0 → adição, 1 → subtração, 2 → multiplicação, 3 → divisão) e a e b são os operandos. Na implementação, defina uma função interna sem parâmetros para realizar cada operação (adiciona(), etc.).

// Ex.: calc(2, 15,10) deve retornar 150.

function calc(op, a, b) {
    switch (op) {
        case 0:
            function adiciona() {
            return console.log(a + b);
        }
	adiciona();
	break;
        case 1:
            function subtrai() {
            return console.log(a - b);
        }
	adiciona();
	break;

        case 2:
            function multiplica() {
            return console.log(a * b);
        }
	adiciona();
	break;

        case 3:
            function divide() {
            return console.log(a / b);
        }	
	adiciona();
	break;

    }
}

calc(2, 0, 2);