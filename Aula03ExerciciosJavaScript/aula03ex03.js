/*
3) Leia um número para representar um ano. Verifique se o ano é bissexto. Exiba o resultado no console.
Dica: um ano bissexto é divísivel por 4 E não é divísivel por 100, OU é divísivel por 400.
*/
const prompt = require('prompt-sync')();

let ano = parseInt(prompt("Digite um ano: "));

if (ano % 4 === 0 && ano % 100 !==0 || ano % 400 === 0) {
    console.log(`O ano ${ano} é bissexto!`);
} else {
    console.log(`O ano ${ano} NÃO é bissexto!`);
}