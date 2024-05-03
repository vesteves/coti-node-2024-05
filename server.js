const express = require("express");
const somar = require("./index.js");
const app = express();

function subtrair(x, y) {
    return x - y
}

const multiplicar = (a, b) => {
    return a * b
}

const dividir = (x, y) => {
    console.log('Meu resultado da divisão é ' + x / y + '.');
}

// app.listen(8000)
app.listen(8000, function() {
    console.log(somar(4,2));
    const resultado = subtrair(3,2);
    console.log('Meu resultado é: ' + resultado + '.');
    console.log(`Meu resultado da multiplicação é ${multiplicar(2,2)}.`);
    dividir(10, 2);
    console.log('Servidor ON!');
});
