const express = require ("express")
const pedidoService = require('./pedido_service');

const app = express()
app.use(express.json())

// Rota para listar pedidos
app.get("/api/pedidos", async (req, res) =>{
    const listaPedidos = await pedidoService.listar();
    res.json(listaPedidos);
})

// Rota para buscar um pedido específico pelo id
app.get("/api/pedidos/:id", async (req, res) =>{
    const id = req.params.id;
    try{
        const pedido = await pedidoService.buscarPorId(id);
        res.json(pedido);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

// Rota para inserir um novo pedido
app.post("/api/pedidos", async (req, res) =>{
    const pedido = req.body;
    try{
        const pedidoInserido = await pedidoService.inserir(pedido);
        res.status(201).json(pedidoInserido);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }   
})

// Rota para atualizar um pedido existente pelo id
// Recebe os dados atualizados e chama o serviço para atualizar
app.put("/api/pedidos/:id", async (req, res) =>{
    const id = req.params.id;
    const pedido = req.body;
    try{
        const pedidoAtualizado = await pedidoService.atualizar(id, pedido);
        res.json(pedidoAtualizado);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

// Rota para remover um pedido pelo id
app.delete("/api/pedidos/:id", async (req, res) =>{
    const id = req.params.id;
    try{
        const pedidoDeletado = await pedidoService.deletar(id);
        res.json({ msg: "Pedido removido com sucesso", pedido: pedidoDeletado });
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

// Inicia o servidor na porta 3000 e imprime mensagem no console
app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})