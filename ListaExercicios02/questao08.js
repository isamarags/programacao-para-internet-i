/*
8. Escreva uma função chamada saudacao com um argumento obrigatório, nome, e um opcional, frase. A função deve escrever uma saudação na tela, contendo o nome e a frase especificadas. Se a frase não for especificada, o valor padrão é "Olá".

Por exemplo, o seguinte código:

saudacao('Fulano');
saudacao('Sicrano', 'Bom dia');
saudacao('Beltrano', 'Boa noite');
Deve retornar algo parecido com:

Olá, Fulano!
Bom dia, Sicrano!
Boa noite, Beltrano!
 */

 function saudacao(obr, opc = 'Olá,') {
  console.log(opc, obr);
}

saudacao('Fulano');
saudacao('Sicrano', 'Bom dia');
saudacao('Beltrano', 'Boa noite');