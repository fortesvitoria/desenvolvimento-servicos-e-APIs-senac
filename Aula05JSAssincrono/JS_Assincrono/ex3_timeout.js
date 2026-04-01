function sleep(milisec) {
    return new Promise(resolve => setTimeout(resolve,milisec));
}

async function main() {
    console.log("Aguardando por 3 segundos ...");
    await sleep(3000);
    console.log("Fim da aplicacao!");
}

main();
