const fs = require ("fs")
let dadosLidos = fs.readFileSync("teste.txt", "utf-8");
console.log("1: ", dadosLidos);
fs.writeFileSync("teste1.txt", dadosLidos);
console.log("2: ", "Escrito com sucesso");

console.log("3: ", "Fim da aplicação");