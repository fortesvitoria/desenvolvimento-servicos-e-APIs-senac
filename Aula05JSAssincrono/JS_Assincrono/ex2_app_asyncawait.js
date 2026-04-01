const fs= require('fs').promises

async function copiaDadosArquivo(){
    const dadosLidos = await fs.readFile("teste.txt", "utf8");
    console.log("1: ",dadosLidos);
    await fs.writeFile("teste1.txt", dadosLidos);
    console.log("2: ", "Escrito com sucesso");
}

copiaDadosArquivo();
console.log("3: ", "Fim da aplicação");