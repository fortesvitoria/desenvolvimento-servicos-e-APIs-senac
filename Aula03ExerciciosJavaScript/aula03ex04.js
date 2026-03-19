/*
4) Crie uma aplicação que:
- Solicita ao usuário que digite uma nota de 0 a 10;
- Armazena o conceito correspondente à nota. As regras são:
Faixa de nota 	Conceito
>= 9 	A
>= 7 	B
>= 5 	C
< 5 	D

- Imprima o conceito final na tela.
*/

const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite sua nota: "));

if (isNaN(nota)) {
    console.log(`DIGITE SOMENTE NUMEROS!`);
} else if (nota >= 9) {
    console.log(`A nota digitada foi ${nota}\nConteito: A`);
} else if (nota >= 7) {
    console.log(`A nota digitada foi ${nota}\nConteito: B`);
} else if (nota >= 5) {
    console.log(`A nota digitada foi ${nota}\nConteito: C`);
} else if (nota < 5) {
    console.log(`A nota digitada foi ${nota}\nConteito: D`);
}