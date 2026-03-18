const bcrypt = require('bcrypt');
const  prompt = require('prompt-sync')();

let texto = prompt("Senha: ");
textoHash = bcrypt.hashSync (texto, 10);
console.log(textoHash);

console.log( bcrypt.compareSync("12345", textoHash));
console.log( bcrypt.compareSync("Hello", textoHash));