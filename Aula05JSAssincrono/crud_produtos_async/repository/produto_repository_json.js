const promiseFs = require('fs').promises;

async function loadData() {
    const result = await promiseFs.readFile('produtos.json', 'utf-8');
    const data = JSON.parse(result);
    return data;
}

async function saveData(data){
    await promiseFs.writeFile('produtos.json',JSON.stringify(data));
}

function buscarIndicePorId(lista, id) {
    return lista.findIndex((produto) => produto.id === id);
}

async function listar() {
    const data = await loadData();
    if(data) {
        const listaProdutos = data.listaProdutos;        
        return listaProdutos;
    }
}

async function inserir(produto) {
    const data = await loadData();
    if(data) {
        produto.id = data.autoIncrement++;    
        data.listaProdutos.push(produto);
        await saveData(data);
        return produto;
    }

}

async function buscarPorId(id) {
    const data = await loadData();
    if(data && data.listaProdutos) {
        return data.listaProdutos.find(produto => produto.id === id);        
    }
}

async function atualizar(id, produtoAtual) {
    const data = await loadData();
    if(data && data.listaProdutos) {
        let indice = buscarIndicePorId(data.listaProdutos,id);
        if(indice >= 0) {
            produtoAtual.id = id; 
            data.listaProdutos[indice] = produtoAtual;
            await saveData(data);
            return (data.listaProdutos[indice]);
        }        
    }
}

async function deletar(id) {
    const data = await loadData();
    if(data && data.listaProdutos) {
        let indiceProduto = buscarIndicePorId(data.listaProdutos,id);
        if(indiceProduto >= 0) {
            let produtoRemovido = data.listaProdutos.splice(indiceProduto, 1)[0];
            await saveData(data);
            return produtoRemovido;
        }
    }
}

async function pesquisarPorCategoria(categoria) {
    const data = await loadData();
    if(data && data.listaProdutos) {
        return data.listaProdutos.filter( (produto) => produto.categoria == categoria );
    }
}

async function pesquisarPorNomeLike(nome) {
    const data = await loadData();
    if(data && data.listaProdutos) {
        return data.listaProdutos.filter ( (produto) => {
            const produtoNomeUpper = produto.nome.toUpperCase();
            const nomeUpper = nome.toUpperCase();
            return (produtoNomeUpper.search(nomeUpper) >= 0);
        });
    }
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