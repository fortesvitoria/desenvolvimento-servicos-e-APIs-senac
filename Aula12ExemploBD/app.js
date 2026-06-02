const express = require('express');
const app = express();
const port = 3000;

const Client = require('pg').Client;


app.get('/bd', async (req, res) => {
    const cliente = await new Client({
        user: 'postgres',
        password: 'senacrs',
        host: 'localhost',
        port: 5432,
        database: 'crud_produtos',
    }).connect();
    const resultado = await cliente.query('SELECT * FROM produtos');
    await cliente.end();
    res.json(resultado.rows);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});