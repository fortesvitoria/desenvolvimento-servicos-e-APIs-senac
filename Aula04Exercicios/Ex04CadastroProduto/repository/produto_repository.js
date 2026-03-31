let listaProdutos = [];
let autoIncrement = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = autoIncrement++;
    listaProdutos.push(produto);
}

function buscarPorId(id) {
    /*for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto;
        }
    }*/
    return (listaProdutos.find(
        function(produto) {
            return (produto.id == id);        
        }
    ));
}

function buscarIndicePorId(id) {
    return listaProdutos.findIndex((produto) => produto.id === id);
}

function atualizar(id, produtoAtual) {
    let indice = buscarIndicePorId(id);
    if(indice >= 0) {
        produtoAtual.id = id; 
        listaProdutos[indice] = produtoAtual;
        return listaProdutos[indice];
    }
}

function deletar(id) {
    let indiceProduto = buscarIndicePorId(id);
    if(indiceProduto >= 0) {
        let produtoRemovido = listaProdutos.splice(indiceProduto, 1)[0];
        return produtoRemovido;
    }
}

function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter( (produto) => produto.categoria == categoria )
}

function pesquisarPorNomeLike(nome) {
    return listaProdutos.filter ( (produto) => {
        const produtoNomeUpper = produto.nome.toUpperCase();
        const nomeUpper = nome.toUpperCase();
        return (produtoNomeUpper.search(nomeUpper) >= 0);
    })
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorNomeLike
}