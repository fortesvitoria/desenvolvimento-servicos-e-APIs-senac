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
    try {
        pedidoValidador.validaPedido(pedido);
        const pedidoInserido = await pedidoRepository.inserir(pedido);
        if (!pedidoInserido) {
            throw "Pedido sem dados corretos";
        }
        return pedidoInserido;
    }
    catch (erro) {
        throw { id: 400, msg: erro };
    }
}


// Função para buscar pedido por id
async function buscarPorId(id) {
    try {
        pedidoValidador.validaId(id);
    }
    catch (erro) {
        throw { id: 400, msg: "ID não encontrada" }
    }

    let pedido = await pedidoRepository.buscarPorId(id);
    if (pedido) {
        return pedido;
    } else {
        throw { id: 404, msg: "Pedido não encontrado" };
    }
}

// Função para atualizar um cliente
// Verifica se há dados para atualizar e chama o repositório
async function atualizar(id, pedido) {

    try { 
        pedidoValidador.validaPedido(pedido);

    }
    catch (erro) {
        throw { id: 400, msg: erro };
    }
    
    if (pedido && (pedido.nomeCliente || pedido.nomeProduto || pedido.preco)) {
        const pedidoAtualizado = await pedidoRepository.atualizar(id, pedido);
        if (pedidoAtualizado) {
            return pedido;
        }
    }
    else {
        throw { id: 400, msg: "Pedido sem dados corretos" };
    }
}

// Função para deletar pedido
async function deletar(id) {
    let pedido = await pedidoRepository.deletar(parseInt(id));
    if (pedido) {
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
    atualizar,
    deletar
}