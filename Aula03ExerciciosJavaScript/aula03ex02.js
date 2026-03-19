/*
2) Crie uma variável chamada senhaUsuario e leia uma string e atribua para essa variável.
Compare o valor da variável com uma senha armazenada em uma constante "senha" (Ex: "DesenvolvimentoApis")
Exiba o resultado de senha digitada válida ou inválida (pode usar true ou false no console).
*/
const prompt = require('prompt-sync')();

let senhaUsuario = prompt("Digite sua senha: ");
const senha = "DesenvolvimentoApis";

if (senha === senhaUsuario) {
    console.log(true);
} else {
    console.log(false);
}