// Cria lista de clientes
let listaClientes = [];

// Função para listar todos os clientes
// Retorna a lista completa de clientes
async function listar() {
    return listaClientes;
}

// Função para buscar um cliente específico pelo CPF/CNPJ
async function buscarPorCpfCnpj(cpfCnpj) {
    return (listaClientes.find(
        function(cliente) {
            return (cliente.cpfCnpj === cpfCnpj);
        }
    ));
}

// Função para inserir um novo cliente
// Valida se o cliente tem todos os campos obrigatórios e adiciona à lista
async function inserir(cliente) {
    if(!cliente || !cliente.cpfCnpj || !cliente.tipoPessoa 
        || !cliente.nome || !cliente.email) {
            return;
    }
    listaClientes.push(cliente);
    return cliente;
}

// Função auxiliar para buscar o índice de um cliente na lista pelo CPF/CNPJ
// Retorna o índice ou -1 se não encontrado
function buscarIndicePorCpfCnpj(cpfCnpj) {
    return listaClientes.findIndex((cliente) => cliente.cpfCnpj === cpfCnpj);
}

// Função para atualizar um cliente existente
// Encontra o índice, atualiza os dados e retorna o cliente atualizado
async function atualizar(cpfCnpj, ClienteAtualizado) {

    let indice = buscarIndicePorCpfCnpj(cpfCnpj);
    if(indice >= 0) {
        ClienteAtualizado.cpfCnpj = cpfCnpj; 
        listaClientes[indice] = ClienteAtualizado;
        return listaClientes[indice];
    }
}

// Função assíncrona para deletar um cliente pelo CPF/CNPJ
// Remove o cliente da lista e retorna o cliente deletado
async function deletar(cpfCnpj) {
    let indice = buscarIndicePorCpfCnpj(cpfCnpj);
    if(indice >= 0) {
        return listaClientes.splice(indice, 1)[0];
    }
}

// Exporta as funções
module.exports = {
    listar,
    inserir,
    buscarPorCpfCnpj,
    atualizar,
    deletar
}