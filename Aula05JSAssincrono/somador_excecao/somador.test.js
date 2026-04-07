const somador = require('./somador')
//cenário de sucesso 1
test('Soma de 10 e 10 é 20', () => {
    expect(somador.somarNumerosNaturais(10,10)).toBe(20);
});

//Exceção 1: num1 ou num2 não são números
test('Soma de "10" e 10 lança erro porque "10" deveria ser numero', () => {
    expect(() => somador.somarNumerosNaturais("10",10)).toThrow("Valores nao sao numeros");
});

//Exceção 2: num1 ou num2 não são inteiros
test('Soma de 0.5 e 10 lança erro porque 0.5 deveria ser inteiro', () => {
    expect(() => somador.somarNumerosNaturais(0.5,10)).toThrow("Valores nao sao inteiros");
});

//Exceção 3: num1 ou num2 não são inteiros
test('Soma de -0.5 e 10 lança erro porque -0.5 deveria ser inteiro', () => {
    expect(() => somador.somarNumerosNaturais(-0.5,10)).toThrow("Valores nao sao inteiros");
});

//Exceção 4: num1 ou num2 não são naturais (positivos)
test('Soma de -5 e 10 lança erro porque -5 deveria ser positivo', () => {
    expect(() => somador.somarNumerosNaturais(-5,10)).toThrow("Valores nao sao positivos");
});


//cenário de sucesso 2
test('Soma de 0 e 0 é 0', () => {
    expect(somador.somarNumerosNaturais(0,0)).toBe(0);
});