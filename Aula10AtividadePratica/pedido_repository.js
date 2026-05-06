// Cria lista de pedidos
let listaPedidos = [];
let autoIncrement = 1;

// Função para listar todos os pedidos
// Retorna a lista completa de pedidos
async function listar() {
    return listaPedidos;
}

//Função para buscar um pedido por id
async function buscarPorId(id) {
    return (listaPedidos.find(
        function(pedido) {
            return (pedido.id == id);        
        }
    ));
}


// Função para inserir um novo pedido
// Valida se o pedido tem todos os campos obrigatórios e adiciona à lista
async function inserir(pedido) {
    if(!pedido || !pedido.cpf || !pedido.nomeCliente 
        || !pedido.nomeProduto || !pedido.preco) {
            return;
    }
    pedido.id = autoIncrement++;
    pedido.dtHota = new Date();
    pedido.situacao = "aberto"
    listaPedidos.push(pedido);
    return pedido;
}

function buscarIndicePorId(id) {
    return listaPedidos.findIndex((pedido) => pedido.id === id);
}

async function deletar(id) {
    let indicePedido= buscarIndicePorId(id);    
    if(indicePedido>= 0) {
        return listaPedidos.splice(indicePedido, 1)[0];
    }
}



// Exporta as funções
module.exports = {
    listar,
    inserir,
    buscarPorId,
    deletar
}