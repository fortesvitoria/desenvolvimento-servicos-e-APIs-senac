// Função para validar CPF/CNPJ
// Verifica se é obrigatório e tem pelo menos 9 caracteres
function validaCpfCnpj(cpfCnpj) {
    if(!cpfCnpj)
        throw "CPF/CNPJ é obrigatório";
    if(cpfCnpj.trim().length < 9)
        throw "CPF/CNPJ deve ter no minimo 9 caracteres";
}

// Função para validar o tipo de pessoa
// Deve ser 'F' para físico ou 'J' para jurídico
function validaTipoPessoa(tipoPessoa) {
    if(!tipoPessoa)
        throw "O tipo de pessoa é obrigatório";
    if(tipoPessoa.toUpperCase() !== "F" && tipoPessoa.toUpperCase() !== "J")
        throw "O tipo pessoa deve aceitar apenas 'F' para físico e 'J' para jurídico";
}

// Função para validar o nome
// Permite apenas letras, números, acentos e espaços, usando regex
function validaNome(nome) {
    if(!nome)
        throw "O nome é obrigatório";
    //Só permite letras (a-z), números (0-9) e as letras com acentos e espaço no final
    // /^ e $/ inicia e termina o regex
    //+ permite mais de um desses caracter 
    //i no final (aceita maiusculas ou minusculas)
    let regex = /^[a-z0-9áéíóúâêôç ]+$/i;
    if(!regex.test(nome))
        throw "O nome deve conter apenas letras, números e acentuação";
}

// Função para validar o email
// Deve conter '@' e pelo menos um '.'
function validaEmail(email) {
    if(!email)
        throw "O e-mail é obrigatório";
    if(email.search('@') < 0 || email.indexOf('.') < 0)
        throw "O e-mail deve ter um único '@' e pelo menos um '.'";
}

// Função para validar a data de nascimento
// Verifica se é uma data válida e não futura
function validaDataNascimento(dataNasc) {
    if(!dataNasc)
        return true;

    let [dia, mes, ano] = dataNasc.split('/');
    //Converte para int (mes comeca com 0 e vai ate 11)
    [dia, mes, ano] = [parseInt(dia), parseInt(mes)-1, parseInt(ano)];

    const data = new Date(ano, mes, dia);
    
    if (data.getFullYear() !== ano ||
        data.getMonth() !== mes ||
        data.getDate() !== dia) {
        throw "A data de nascimento deve ser uma data válida."
    }

    if(data > new Date()) {
        throw "A data de nascimento não pode ser uma data futura."
    }
}

// Função principal para validar um cliente completo
// Chama todas as validações individuais
function validaCliente(cliente) {
    if(!cliente) throw "Cliente é obrigatório";

    validaCpfCnpj(cliente.cpfCnpj);
    validaTipoPessoa(cliente.tipoPessoa);
    validaNome(cliente.nome);
    validaEmail(cliente.email);
    validaDataNascimento(cliente.dataNascimento);
}

// Exporta as funções
module.exports = {
    validaCpfCnpj,
    validaCliente
}