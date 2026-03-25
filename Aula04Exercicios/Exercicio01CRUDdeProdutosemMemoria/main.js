import { inserir, listar } from './crud.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

let continuar = true;

while (continuar) {
    let nome = prompt('Digite o nome do produto: ');
    let categoria = prompt('Digite a categoria do produto: ');
    let preco = parseFloat(prompt('Digite o preço do produto: '));
    if (isNaN(preco)) {
        console.log("Digite somente números!");
        continue;
    }

    inserir(nome, categoria, preco);

    let proximo = prompt('Deseja adicionar outro produto? [S / N] \n');

    if (proximo == "n" || proximo == "N") {
        continuar = false;
    }

}

console.log("\n--- Lista de produtos: ---")
listar();

for (let produto of listaDeProdutos) {
    console.log(`ID: ${produto.id} - Nome do produto: ${produto.nome} - Categoria do produto: ${produto.categoria} - Preço: R$ ${produto.preco}`)

}
