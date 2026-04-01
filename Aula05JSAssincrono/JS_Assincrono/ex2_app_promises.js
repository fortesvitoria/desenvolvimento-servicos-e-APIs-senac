const fs = require('fs').promises;

fs.readFile("teste.txt", "utf8")
    //readFile
    .then((data) => {
        const dadosLidos = data;
        console.log("1: ", dadosLidos);
        fs.writeFile("teste1.txt", dadosLidos);
    })
    //writeFile
    .then(() => {
        console.log("2: ","Escrito com sucesso")
    })
    .catch((err)=> console.error(err))

    console.log("3: ","Fim da aplicação");