const express = require ("express")
const produtoRouter = require('./router/produto_router')

const app = express();
app.use(express.json()) // for parsing application/json
app.use('/api/produtos', produtoRouter)

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})

/*
Para testar no Insomnia:
  {
    "nome": "Suco",
    "categoria": "Bebida",
    "preco": 11.00
  },
  {
    "nome": "Feijao",
    "categoria": "Alimento",
    "preco": 8.5
  },
  {
    "nome": "Arroz",
    "categoria": "Alimento",
    "preco": 5.00
  }

Comandos node:
- npm init
- npm i
- npm start
*/