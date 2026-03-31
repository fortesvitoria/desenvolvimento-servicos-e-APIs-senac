const produtoRepository = require("./repository/produto_repository")

function main() {
    let produto1 = {
        nome: "Arroz",
        categoria: "Alimento",
        preco: 4.5
    };
    
    let produto2 = {
        nome: "Coca-cola 2L",
        categoria: "Bebida",
        preco: 10.8
    };

    produtoRepository.inserir(produto1);
    produtoRepository.inserir(produto2);
    produtoRepository.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    produtoRepository.inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    produtoRepository.inserir({nome:"Detergente", categoria:"Limpeza", preco:2.5});

    console.log(produtoRepository.listar());
    console.log("Produto [id=2]: ", produtoRepository.buscarPorId(2));

    console.log("Produtos da categoria Alimento", produtoRepository.pesquisarPorCategoria("Alimento"));

    console.log("Produtos que possuem a letra 'a'", produtoRepository.pesquisarPorNomeLike("a"));

    console.log("Produto atualizado ", produtoRepository.atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4}));

    console.log("Produto removido: ", produtoRepository.deletar(1));

    console.log(produtoRepository.listar());

}

main();