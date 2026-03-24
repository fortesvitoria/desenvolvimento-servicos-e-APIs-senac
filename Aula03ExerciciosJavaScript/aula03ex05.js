/*
5) Crie uma aplicação que solicita ao usuário 3 produtos (nome, preço e quantidade). 
Esses produtos são armazenados numa lista. 

Após receber as informações dos três produtos, é solicitada a forma de pagamento com as seguintes opções:
1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
2 - À Vista no cartão de crédito, recebe 10% de desconto
3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

No final, deve ser impresso os produtos e o valor total do seguinte formato:
Produto 1 - R$ 5,00 - 2 unidades
Produto 2 - R$ 2,00 - 4 unidades
Produto 3 - R$ 10,00 - 1 unidade
Total: R$ 28,00

> Pagamento à vista no cartão de crédito
Valor Final: R$ 25,20

*/
const prompt = require('prompt-sync')();

let produtos = [];

for (let i = 0; i < 3; i++) {
    console.log(`Produto ${i + 1}:`);
    let nome = prompt('Digite o nome do produto: ');
    let preco = parseFloat(prompt('Digite o preço do produto: '));
    let quantidade = parseInt(prompt('Digite a quantidade do produto: '));

    produtos.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    })
}

let total = 0;
let totalPagar = 0;
let mensagem = '';

for (let produto of produtos) {
    total += produto.preco * produto.quantidade;
}

console.log(` 
    --- Valor total R$ ${total} 

    --- Formas de pagamento:
    
    1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
    2 - À Vista no cartão de crédito, recebe 10% de desconto
    3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
    4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
    `);


let formaPagamento = parseInt(prompt('--- Digite uma opção: '));

switch (formaPagamento) {
    case 1:
        totalPagar = total - (total * 0.15);
        mensagem = 'Pagamento à vista em dinheiro ou Pix'
        break;
    case 2:
        totalPagar = total - (total * 0.1);
        mensagem = 'Pagamento à vista no cartão de crédito'
        break;
    case 3:
        totalPagar = total;
        mensagem = 'Parcelado no cartão em duas vezes'
        break;
    case 4:
        totalPagar = total + (total * 0.1);
        mensagem = 'Parcelado no cartão em três vezes ou mais'
        break;

}

let textoUnidade = '';

for (let produto of produtos) {
    if (produto.quantidade == 1) {
        textoUnidade = "unidade"
        console.log(`${produto.nome} - R$ ${produto.preco} - ${produto.quantidade} ${textoUnidade}`)
    } else {
        textoUnidade = "unidades"
        console.log(`${produto.nome} - R$ ${produto.preco} - ${produto.quantidade} ${textoUnidade}`)
    }
}

console.log(`
    Total: ${total}

    > ${mensagem}
    Valor final: R$ ${totalPagar} 
    `)