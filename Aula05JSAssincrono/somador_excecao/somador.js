
function somarNumerosNaturais(x,y) {
    if(typeof x != "number" || typeof y != "number"){  
        throw "Valores nao sao numeros";      
    }

    if(!Number.isInteger(x) || !Number.isInteger(y)) {
        throw "Valores nao sao inteiros";
    }    

    if(x < 0 || y < 0) {
        throw "Valores nao sao positivos";        
    }

    return x + y;
}

module.exports = {
    somarNumerosNaturais
}