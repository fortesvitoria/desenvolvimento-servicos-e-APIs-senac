const pedidoRepository = require('./pedido_repository');
const pedidoValidador = require('./pedido_validador');

// Função para listar pedidos
// [R03] A listagem deve exibir todos os pedidos, onde cada pedido deve mostrar:
// - codigo, - dataHora, - clienteNome, - produtoNome, - situacao, - valor total (produtoPreco)
async function listar() {
    return await pedidoRepository.listar();
}

// Função para inserir um novo pedido
async function inserir(pedido) {
    if(pedido && pedido.cpf && pedido.nomeCliente 
        && pedido.nomeProduto && pedido.preco
        && typeof(pedido.preco) === 'number'){
            return await pedidoRepository.inserir(pedido);
    }
    else {
        throw { id: 400, msg: "Produto sem dados corretos"}
    }
}

// Função para buscar pedido por id
async function buscarPorId(id) {
    let pedido = await pedidoRepository.buscarPorId(id);
    if (pedido) {
        return pedido;
    } else {
        throw {id: 404, msg: "Pedido não encontrado"};
    }
}

// Função para deletar pedido
async function deletar(id) {
    let pedido = await pedidoRepository.deletar(parseInt(id));
    if(pedido) {
        return pedido;
    }
    else {
        throw { id: 404, msg: "Pedido não encontrado!" }
    }
}


// Exporta as funções
module.exports = {
    listar,
    inserir,
    buscarPorId,
    deletar
}