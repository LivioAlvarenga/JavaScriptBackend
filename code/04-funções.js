// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - function declaration

function sum() {
    console.log(2 + 2);
}
sum(); // rodar, invocar, chamar função

// - function anonymous
const sum = function () {
    console.log(2 + 2);
};
sum();

// - parameters VS arguments
// function(number1, number2) - parameters
const sum = function (number1, number2) {
    console.log(number1 + number2);
};
sum(2, 2); // arguments

// - return Vs not return
const sum = function () {
    console.log(2 + 2);
};
console.log(`2 + 2 = ${sum()}`);

// with return
const sum = function () {
    console.log(2 + 2);
    return 2 + 2;
};
console.log(`2 + 2 = ${sum()}`);

// - function scope
//
let fruit = "morango";
function getFruit(fruit) {
    return fruit;
}
console.log(`fruit = ${fruit}`);
console.log(`getFruit() = ${getFruit(fruit)}`);

//modificando fruit dentro da função
let fruit = "morango";
function getFruit(fruit) {
    fruit = "maçã";
    return fruit;
}
console.log(`fruit = ${fruit}`);
console.log(`getFruit() = ${getFruit(fruit)}`);

//declarando fruit sem atribuir valor
let fruit;
function getFruit(fruit) {
    fruit = "maçã";
    return fruit;
}
console.log(`fruit = ${fruit}`);
console.log(`getFruit() = ${getFruit(fruit)}`);
console.log(`fruit = ${fruit}`);

// - function hoisting
// Com o hoisting o JavaScript analisa todo o código procurando por variáveis declaradas com var e funções para trazer tais declarações para o início do código.

console.log(`getFruit() = ${getFruit()}`);

function getFruit() {
    return "maçã";
}

// Expressões de função, uma maneira diferente de montar funções usando variáveis do tipo const e chamando-as pelo nome. Lembrando que é necessário que o programa passe pela variável antes de podermos chamá-la, já que não há suporte à hoisting.
console.log(`getFruit() = ${fruit}`); // não há suporte à hoisting!!!
let fruit = function getFruit() {
    return "maçã";
};

// - arrow function

let getFruit = () => {
    return "maçã";
};
console.log(`getFruit = ${getFruit}`);
console.log(`getFruit = ${getFruit()}`);

// Arrow function, uma função declarada de maneira mais compacta usando uma const. A arrow function também não tem suporte à hoisting.
console.log(`getFruit = ${fruit}`); // não há suporte à hoisting!!!
let getFruit = () => {
    return "maçã";
};

// - callback function

function myFunction(callback) {
    callback();
}

myFunction(() => {
    console.log("callback called");
});

// - Function() constructor

function Car(name, color) {
    this.name = name;
    this.color = color;
}

const veiculo = new Car("fusca", "branco");
console.log(veiculo.name);
console.log(veiculo.color);
