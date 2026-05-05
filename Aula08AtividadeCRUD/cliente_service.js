const clienteRepository = require('./cliente_repository');
const clienteValidador = require('./cliente_validador');

// Função para listar clientes
// Obtém a lista do repositório, ordena alfabeticamente por nome e retorna compos escolhidos
async function listar() {
    const listaClientes = await clienteRepository.listar();
    return listaClientes.sort((a,b) => a.nome.localeCompare(b.nome)).map(cliente => {
        return {
            cpfCnpj: cliente.cpfCnpj,
            tipoPessoa: cliente.tipoPessoa,
            nome: cliente.nome,
            email: cliente.email,
        }
    });
}

// Função para inserir um novo cliente
// Valida o cliente, verifica se é único e insere no repositório
async function inserir(cliente) {
    try{
        clienteValidador.validaCliente(cliente)
        if (await clienteUnico(cliente)){
            return await clienteRepository.inserir(cliente);
        } else {
            throw "Já existe um cliente com o mesmo CPF/CNPJ";
        }
    } 
    catch (erro) {
        throw {id: 400, msg: erro};
    }
}

// Função auxiliar para verificar se o cliente é único
async function clienteUnico(cliente) {
    if (cliente && cliente.cpfCnpj) {
        const consulta = await clienteRepository.buscarPorCpfCnpj(cliente.cpfCnpj);
        return !consulta;
    }
    return false;
}

// Função para buscar cliente por CPF/CNPJ
// Valida o CPF/CNPJ e busca no repositório, lançando erro se não encontrado
async function buscarPorCpfCnpj(cpfCnpj)  {
    try {
        clienteValidador.validaCpfCnpj(cpfCnpj);
    }
    catch (erro) {
        throw {id: 400, msg: erro};
    }

    let cliente = await clienteRepository.buscarPorCpfCnpj(cpfCnpj);
    if (cliente) {
        return cliente;
    } else {
        throw {id: 404, msg: "Cliente não encontrado"};
    }
}

// Função para atualizar um cliente
// Verifica se há dados para atualizar e chama o repositório
async function atualizar(cpfCnpj, cliente) {
    if(cliente && (cliente.nome || cliente.tipoPessoa || cliente.email)) {
        const clienteAtualizado = await clienteRepository.atualizar(cpfCnpj, cliente);
        if(clienteAtualizado) {
            return cliente;
        }        
        else {
            throw {id:404, msg: "Produto não encontrado"};
        }
    }
    else {
        throw {id:400, msg: "Produto sem dados corretos"};
    }
}

// Função para deletar um cliente por CPF/CNPJ
// Chama o repositório para deletar e retorna o cliente deletado ou erro
async function deletar(cpfCnpj) {
    let clienteDeletado = await clienteRepository.deletar(cpfCnpj);
    if(clienteDeletado) {
        return clienteDeletado;
    }
    else {
        throw { id: 404, msg: "Cliente não encontrado!" }
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