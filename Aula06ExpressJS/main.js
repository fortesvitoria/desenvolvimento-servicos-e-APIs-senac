import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/produtos', (req, res) => {
  res.send('<h2>Listando Produtos:</h2>')
})

app.post('/api/produtos', (req, res) => {
  res.send('<h2>Inserir Produto:</h2>')
})

app.get('/api/produtos/:id', (req, res) => {
  res.send('<h2>Listar Produtos por ID:</h2>')
})

app.put('/api/produtos/:id', (req, res) => {
  res.send('<h2>Atualizar Produto:</h2>')
})

app.delete('/api/produtos/:id', (req, res) => {
  res.send('<h2>Deletar Produto:</h2>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
