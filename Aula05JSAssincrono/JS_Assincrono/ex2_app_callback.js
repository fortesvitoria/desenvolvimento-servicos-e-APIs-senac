const fs = require('fs');

fs.readFile("teste.txt", 'utf8', (err,data) => {
    if(err) {
        console.error(err);
        return;
    }
    const dadosLidos = data;
    console.log("1: ", dadosLidos);
    fs.writeFile("teste1.txt", dadosLidos, (err) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log("2: ","Escrito com sucesso");
    })
})
console.log("3: ","Fim da aplicação");
