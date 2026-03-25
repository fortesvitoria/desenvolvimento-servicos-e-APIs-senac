/*
1) Crie um bloco de código JavaScript que:
- Leia um número com um valor inteiro de três dígitos (ex: 351).
- Extrai cada dígito sequencialmente da unidade à centena, exibindo-os um a um no console;
- Acumule todos os valores somando-os em uma nova variável;
- Exibe ao final a soma dos dígitos.
Exemplo de execução esperada:

    Digite um número inteiro de três dígitos: 351
    Unidade: 1
    Dezena: 5
    Centena: 3
    Soma dos dígitos: 9
*/

const prompt = require('prompt-sync')();

let numero = prompt('Digite um número inteiro de três dígitos: ');



