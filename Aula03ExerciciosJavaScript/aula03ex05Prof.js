const prompt = require('prompt-sync')();

let listaProdutos = [];

for(let i=0; i<3; i++){
    let produto = {};
    produto.nome = prompt("Nome do produto: ");
    produto.preco = prompt("Preco do produto: ");
    produto.quantidade = prompt("Quantidade do produto: ");
    listaProdutos.push(produto);
}

console.log(`1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
2 - À Vista no cartão de crédito, recebe 10% de desconto
3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
`);

let opPagamento = parseInt(prompt("Digite a opção: "));

let valorTotal = 0;
//impressao
for(let produto of listaProdutos){
    console.log(`${produto.nome} - ${produto.preco} - ${produto.quantidade} unidades`);
    valorTotal += (produto.preco * produto.quantidade);
}

console.log(`Valor Total: ${valorTotal}`);

let valorFinal = 0;
switch(opPagamento){
    case 1: 
        valorFinal = valorTotal - valorTotal*0.15;
        break;
    case 2: 
        valorFinal = valorTotal - valorTotal*0.10;
        break;
    case 3: 
        valorFinal = valorTotal;
        break;
    case 4: 
        valorFinal = valorTotal + valorTotal*0.10;
        break;
}

console.log(`Valor Final: ${valorFinal}`);


