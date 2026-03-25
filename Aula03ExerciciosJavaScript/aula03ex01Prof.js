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

let unidade = numero % 10; // Extrai a unidade
let dezena = Math.floor((numero % 100) / 10); // Extrai a dezena
let centena = Math.floor(numero / 100); // Extrai a centena
let soma = unidade + dezena + centena; // Soma dos dígitos

console.log(`Unidade: ${unidade}`);
console.log(`Dezena: ${dezena}`);
console.log(`Centena: ${centena}`);
console.log(`Soma dos dígitos: ${soma}`);     


