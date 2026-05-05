const express = require ("express")
const clienteService = require('./cliente_service');

const app = express()
// permite que a aplicação leia json no corpo das requisições
app.use(express.json())

// Rota para listar clientes
// Chama o clienteService para obter a lista e retorna em formato json
app.get("/api/clientes", async (req, res) =>{
    const listaClientes = await clienteService.listar();
    res.json(listaClientes);
})

// Rota para buscar um cliente específico pelo CPF/CNPJ
// Valida e busca o cliente, retorna erro se não encontrado
app.get("/api/clientes/:cpfCnpj", async (req, res) =>{
    const cpfCnpj = req.params.cpfCnpj;
    try{
        const cliente = await clienteService.buscarPorCpfCnpj(cpfCnpj);
        res.json(cliente);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

// Rota para inserir um novo cliente
// Recebe os dados do cliente no corpo da requisição, valida e insere
app.post("/api/clientes", async (req, res) =>{
    const cliente = req.body;
    try{
        const clienteInserido = await clienteService.inserir(cliente);
        res.status(201).json(clienteInserido);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }   
})

// Rota para atualizar um cliente existente pelo CPF/CNPJ
// Recebe os dados atualizados e chama o serviço para atualizar
app.put("/api/clientes/:cpfCnpj", async (req, res) =>{
    const cpfCnpj = req.params.cpfCnpj;
    const cliente = req.body;
    try{
        const clienteAtualizado = await clienteService.atualizar(cpfCnpj, cliente);
        res.json(clienteAtualizado);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

// Rota para remover um cliente pelo CPF/CNPJ
// Chama o serviço para deletar e retorna mensagem de sucesso
app.delete("/api/clientes/:cpfCnpj", async (req, res) =>{
    const cpfCnpj = req.params.cpfCnpj;
    try{
        const clienteDeletado = await clienteService.deletar(cpfCnpj);
        res.json({ msg: "Cliente removido com sucesso", cliente: clienteDeletado });
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

// Inicia o servidor na porta 3000 e imprime mensagem no console
app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})