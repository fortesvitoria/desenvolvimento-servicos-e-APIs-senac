const express = require ("express")
const produtoService = require("./service/produto_service")
const produtoController = require("./controller/produto_controller")

const app = express();
app.use(express.json()) // for parsing application/json

app.get("/hello", (req, res) => {
    res.send("Hello World");
})

app.get("/api/produtos", produtoController.listar)

app.get("/api/produtos/:id", async (req, res) =>{
    const id = req.params.id;
    try{
        const produto = await produtoService.buscarPorId(id);
        res.json(produto);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
})

app.post("/api/produtos", async (req, res) =>{
    const produto = req.body;
    try{
        const produtoInserido = await produtoService.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }

    
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})