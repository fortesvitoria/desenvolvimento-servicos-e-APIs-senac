const SENHA = "DesenvolvimentoApis";

const prompt = require('prompt-sync')();
const senhaUsuario  = prompt("Senha: ");

if(senhaUsuario === SENHA) {
    console.log("Acertou a senha!!");
}
else {
    console.log("Errou a senha!!");
}
