const produtoService = require("../service/produto_service")

async function listar(req, res) {
    const listaProdutos = await produtoService.listar();
    res.json(listaProdutos);
}

module.exports = {
    listar
}