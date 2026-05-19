const express = require ("express")
// const produtoService = require("./service/produto_service")
const produtoController = require("./controller/produto_controller")
const produtoRouter = require('./router/produto_router')

const app = express();
app.use(express.json()) // for parsing application/json
app.use('/produtos', produtoRouter)

app.get("/", produtoController.listar)

app.get("/:id", produtoController.buscarPorId)

app.post("/", produtoController.inserir)

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})
