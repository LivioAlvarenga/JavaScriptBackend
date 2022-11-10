// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - if...else
let temperature = 36.9;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
    console.log("Febre alta");
} else if (mediumTemperature) {
    console.log("Febre moderada");
} else {
    console.log("Saudável");
}

// - Operador ternário (Ternary)
let number = 1;
console.log(number > 1 ? true : false); // Ternary

// - Switch
function calculate(number1, operator, number2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            console.log("não implementado");
            break;
    }
    return result;
}
console.log(calculate(4, "+", 8));
console.log(calculate(4, "%", 8));

// - throw try..catch

// throw (Nesse caso, se o nome vier vazio, será disparada uma mensagem.)
function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório";
    }
    console.log("name = ", name);
}

// try..catch (Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação)
try {
    sayMyName();
} catch (e) {
    console.log("erro = ", e);
}
console.log("após ao try/catch");
// sem erro!
try {
    sayMyName("Livio");
} catch (e) {
    console.log("erro = ", e);
}
console.log("após ao try/catch");
