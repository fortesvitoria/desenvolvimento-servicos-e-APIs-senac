const express = require ("express")
// const produtoService = require("./service/produto_service")
const produtoController = require("./controller/produto_controller")

const app = express();
app.use(express.json()) // for parsing application/json

app.get("/api/produtos", produtoController.listar)

app.get("/api/produtos/:id", produtoController.buscarPorId)

app.post("/api/produtos", produtoController.inserir)

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})