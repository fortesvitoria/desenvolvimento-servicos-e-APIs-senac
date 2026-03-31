const prompt = require('prompt-sync')();

let nota = prompt("Digite uma nota de 0 a 10: ");

//operação ternária
let conceito = nota >= 9 ?"A" //if
:nota >= 7 ?"B" //else if
:nota >= 5 ?"C" //else if
:"D" //else

console.log("Conceito Final: "+conceito);
