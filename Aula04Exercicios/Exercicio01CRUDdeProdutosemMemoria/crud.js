`
Atividade 1 - CRUD de Produtos em Memória
Realize as seguintes operações de um CRUD de produtos (id [gerado], nome, categoria e preco) em memória (utilize array):

1. inserir: insere um produto no array, gerando um id com a ideia de autoincremento.
2. listar: retorna a lista de produtos
3. buscar por id: com base no id, retorna o produto correspondente.
4. atualizar: recebendo o id e em um produto, atualiza na lista o produto relacionado.
5. deletar: remove o produto com o id recebido no parâmetro.
6. pesquisar por categoria: retorna uma lista de produtos correspondente a determinada categoria.
7. pesquisar por nome (like): retorna uma lista de produtos correspondente que contenha a palavra-chave.
Para testar, realize apenas chamadas de funções do próprio código (sem entrada de dados).
Após concluir as operações, refatore o código separando as funções em um outro arquivo (chamarei de produto_repository.js na pasta repository) como um módulo. O código principal (chamarei de main.js) deverá chamar esse arquivo.
Procure por módulos, module.exports e require para importar as operações no arquivo main.js.
`
let listaDeProdutos = [];
let id = 0;

function incrementar() {
    return id++;
}

export function inserir(nome,categoria,preco) {

        listaDeProdutos.push({
            id: incrementar(),
            nome: nome,
            categoria: categoria,
            preco: preco
        })

        console.log(listaDeProdutos);

}


function listar() {
    for (let produto of listaDeProdutos) {
        console.log(`${produto.id} - R$ ${produto.nome} - ${produto.categoria} ${produto.preco}`)

    }
}
