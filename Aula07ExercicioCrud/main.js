import crud from "./crud.js";

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

    crud.inserir(produto1);
    crud.inserir(produto2);
    crud.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    crud.inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    crud.inserir({nome:"Detergente", categoria:"Limpeza", preco:2.5});

    console.log(crud.listar());
    console.log("Produto [id=2]: ", crud.buscarPorId(2));

    console.log("Produtos da categoria Alimento", crud.pesquisarPorCategoria("Alimento"));

    console.log("Produtos que possuem a letra 'a'", crud.pesquisarPorNomeLike("a"));

    console.log("Produto atualizado ", crud.atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4}));

    console.log("Produto removido: ", crud.deletar(1));

    console.log(crud.listar());

    console.log(`Buscar por ID inexistente: `, crud.buscarPorId(100));
    console.log(`Atualizar ID inexistente: `, crud.atualizar(100, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:100}));
    console.log(`Deletar ID inexistente: `, crud.deletar(100));
}

main();