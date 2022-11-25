//10. Escreva a função recursiva numprint(n), que, ao ser chamada, escreva todos os números entre n e 50. A função não deve conter nenhuma estrutura de loop.

function numprint(n) {
    if (n == 49) {
        return;
    } else {
        console.log(n + 1)
        numprint(n + 1);
    }
}

numprint(2);
