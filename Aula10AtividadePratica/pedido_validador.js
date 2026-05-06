// Função para validar CPF/CNPJ
// US01 [R01] O CPF do cliente é obrigatório.
// US01 [R02] O CPF deve ser numérico e possuir 9 algarismos.
function validaCpf(cpf) {
    if(!cpf)
        throw "CPF é obrigatório";
    if(cpfCnpj.trim().length < 9)
        throw "CPF deve ter no minimo 9 caracteres";
}

// Função para validar o nome do cliente
// US01 [R03] O nome do cliente é obrigatório.
// US01 [R04] O nome do cliente deve ter pelo menos 5 caracteres.
function validaNomeCliente(nomeCliente) {
    if(!nomeCliente)
        throw "O nome é obrigatório";
    //Só permite letras (a-z), números (0-9) e as letras com acentos e espaço no final
    // /^ e $/ inicia e termina o regex
    //+ permite mais de um desses caracter 
    //i no final (aceita maiusculas ou minusculas)
    let regex = /^[a-z0-9áéíóúâêôç ]+$/i;
    if(!regex.test(nomeCliente))
        throw "O nome deve conter apenas letras, números e acentuação";
    if(nomeCliente.trim().length < 5)
        throw "O nome do cliente deve ter no minimo 5 caracteres";
}

// Função para validar produto
// US01 [R05] O nome do produto é obrigatório.
// US01 [R06] O nome do produto deve ter pelo menos 5 caracteres.
function validaNomeProduto(nomeProduto) {
    if(!nomeProduto)
        throw "O nome do produto é obrigatório";
    if(nomeProduto.trim().length < 5)
        throw "O nome do produto deve ter no minimo 5 caracteres";
}

// Função para validar preço
// US01 [R07] O preço do produto é obrigatório.
// US01 [R08] O preço do produto deve ser um número positivo.
function validaPreco(preco){
    if(!preco)
        throw "O preço do produto é obrigatório";
    if(preco < 0)
        throw "O preço do produto deve ser um valor positivo";

}

// Função principal para validar um produto completo
// Chama todas as validações individuais
function validaPedido(pedido) {
    if(!pedido) throw "Pedido é obrigatório";

    validaCpf(pedido.cpf);
    validaNomeCliente(pedido.nomeCliente);
    validaNomeProduto(pedido.nomeProduto);
    validaPreco(pedido.preco)
}

// Exporta as funções
module.exports = {
    validaCpf,
    validaPedido
}