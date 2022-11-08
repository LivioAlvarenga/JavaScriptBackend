// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - number

// Inteiros
const numero = 1;
const tipo = typeof numero;
console.log(numero, tipo);

// Floats
const numero = 1.1;
const tipo = typeof numero;
console.log(numero, tipo);

// Infinity
// Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”
const a = 10;
const b = 0;
console.log(a / b); // Infinity

// NaN (Not a Number)
// No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN (Not a Number).
const a = 0;
const b = 0;
console.log(a / b); // NaN

// - string
const texto = "123245";
const tipo = typeof texto;
console.log(texto, tipo);

// - boolean
const booleano = true;
const tipo = typeof booleano;
console.log(booleano, tipo);

// - undefined (ausência de valor)
let undefinedo;
let tipo = typeof undefinedo;
console.log(tipo);

// - null (existe mais não tem nada dentro)
const nullo = null;
console.log(nullo);

// - object
// Possui propriedades, atributos, funcionalidades e métodos
const objeto = {
    name: "João",
    idade: 10,
    andar: function () {
        console.log("andando!");
    },
};
const tipo = typeof objeto;
console.log(objeto, tipo);
console.log(objeto.name);

// - array (vetores)
const lista = [
    "João",
    10,
    function () {
        console.log("andando!");
    },
];
const tipo = typeof lista;
console.log(lista, tipo);
console.log(lista[0]);

// - Convertendo Tipos
const number = 10;
const numberString = "10";

console.log(number === numberString); //false
console.log(number == numberString); //true
console.log(number + numberString); //1010
console.log(number + Number(numberString)); //20

// - Tipagem dinâmica (untyped)

let myVar = 10;
console.log(typeof myVar); // "number"
myVar = "string";
console.log(typeof myVar); // "string"
myVar = true;
console.log(typeof myVar); // "booleano"
