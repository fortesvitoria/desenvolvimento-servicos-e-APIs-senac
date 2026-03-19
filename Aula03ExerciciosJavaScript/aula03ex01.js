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

let ligado = true;

while (ligado) {
    let numeros = prompt("Digite um numero inteiro com 3 dígitos: ");

    if (numeros.length !== 3 || isNaN(numeros)) {
        console.log("Digite somente um número com 3 dígitos!\n");
    } else {
        let listaNumeros = numeros.split('').map(Number);
        let soma = listaNumeros[0] + listaNumeros[1] + listaNumeros[2];

        console.log(`Números digitados: ${listaNumeros}`);
        console.log(`Unidade: ${listaNumeros[2]}`);
        console.log(`Dezena: ${listaNumeros[1]}`);
        console.log(`Centena: ${listaNumeros[0]}`);
        console.log(`Soma dos dígitos: ${soma}`);
        ligado = false;
    }
}




