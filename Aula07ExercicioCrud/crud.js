`
Essa aula tem como objetivo praticar o desenvolvimento de aplicações com validações, o conceito de APIs e trabalhar com Git/Github. 
A seguir, teremos três atividades para trabalhar com esses temas.
1) [JavaScript - Validações] 
Crie uma aplicação Node.JS que realize o CRUD de produtos (listar, inserir, buscarPorId, atualizar e deletar). 
No entanto, crie uma camada que valide os seguintes cenários (critérios de aceite):

- Inserir: 
(1) um produto deve ter nome e preço. 
(2) Preço deve ser um número.

- BuscarPorId: 
(3) o id deve existir e deve ser um número. 
(4) Caso o produto não exista, uma mensagem deve ser mostrada: "não há produtos".

- Atualizar: 
(5) o id deve existir e deve ser um número. 
(6) No atualizar, pelo menos um dos campos deve existir (nome ou preço). 
(7) Caso o produto a ser atualizado não exista, uma mensagem deve ser mostrada: "não há produtos".   
 
- Deletar: 
(8) o id deve existir e deve ser um número. 
(9) Caso o produto a ser deletado não exista, uma mensagem deve ser mostrada: "não há produtos".    
`

// Lista de produtos em memória
let listaProdutos = [];
// Contador para IDs automáticos
let autoIncrement = 1;

// Função para listar todos os produtos
function listar() {
    return listaProdutos;
}

// Função para inserir um novo produto
// Validações: produto deve ter preço numérico
function inserir(produto) {
    if (typeof produto.preco !== 'number') {
        throw new Error("Produto deve ter nome e preço numérico");
    }
    produto.id = autoIncrement++;
    listaProdutos.push(produto);
}

// Função para buscar um produto por ID
// Validações: ID deve ser um número, produto deve existir
function buscarPorId(id) {
    if (typeof id !== 'number') {
        throw new Error("ID deve ser um número");
    }
    let produto = listaProdutos.find(
        function(produto) {
            return (produto.id == id);        
        }
    );
    if (!produto) {
        console.log(`Não há produtos com o ID ${id}`);
        return null;
    }
    return produto;
}

// Função auxiliar para buscar o índice de um produto por ID
function buscarIndicePorId(id) {
    return listaProdutos.findIndex((produto) => produto.id === id);
}

// Função para atualizar um produto
// Validações: ID deve ser número, produto deve existir, pelo menos um campo (nome ou preço) deve ser fornecido
function atualizar(id, produtoAtual) {
    if (typeof id !== 'number') {
        throw new Error("ID deve ser um número");
    }
    if (!produtoAtual.nome && !produtoAtual.preco) {
        throw new Error("Pelo menos um campo deve existir: nome ou preço");
    }
    let indice = buscarIndicePorId(id);
    if(indice >= 0) {
        produtoAtual.id = id; 
        listaProdutos[indice] = produtoAtual;
        return listaProdutos[indice];
    } else {
        console.log(`Não há produtos com o ID ${id}`);
        return null;
    }
}

// Função para deletar um produto
// Validações: ID deve ser número, produto deve existir
function deletar(id) {
    if (typeof id !== 'number') {
        throw new Error("ID deve ser um número");
    }
    let indiceProduto = buscarIndicePorId(id);
    if(indiceProduto >= 0) {
        let produtoRemovido = listaProdutos.splice(indiceProduto, 1)[0];
        return produtoRemovido;
    } else {
        console.log(`Não há produtos com o ID ${id}`);
        return null;
    }
}

// Função para pesquisar produtos por categoria
function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter( (produto) => produto.categoria == categoria )
}

// Função para pesquisar produtos por nome (like)
function pesquisarPorNomeLike(nome) {
    return listaProdutos.filter ( (produto) => {
        const produtoNomeUpper = produto.nome.toUpperCase();
        const nomeUpper = nome.toUpperCase();
        return (produtoNomeUpper.search(nomeUpper) >= 0);
    })
}

// Exporta as funções como um módulo padrão
export default {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorNomeLike
}