// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - Operadores Lógicos (>, <, >=, <=, ==, !=, ===, !==)

const age1 = 30;
const age2 = 25;
console.log(age1 > age2); // Retorna true se age1 for maior que age2
console.log(age1 < age2); // Retorna true se age1 for menor que age2
console.log(age1 == age2); // Retorna true se age1 for igual a age2
console.log(age1 != age2); // Retorna true se age1 for diferente de age2
console.log(age1 === age2); // Retorna true se age1 for igual a age2 e o tipo de dado é igual
console.log(age1 !== age2); // Retorna true se age1 for diferente de age2 e o tipo de dado é igual

// - == Vs ===
const number = 10;
const numberString = "10";
console.log(number == numberString); // true (Compara valor)
console.log(number === numberString); // false (Compara valor e tipo de dado)

// - || (or) && (and)
const age1 = 30;
const age2 = 25;
console.log(age1 > age2 || age1 < age2); // Retorna true se age1 for maior que age2 ou age1 for menor que age2
console.log(age1 > age2 && age1 < age2); // Retorna true se age1 for maior que age2 e age1 for menor que age2

// - Operador ternário (condição ? true : false)

const minAge = 18;
const age = 16;

// com if
if (age >= minAge) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// com ternário
console.log(age >= minAge ? "Maior de idade" : "Menor de idade");

a = [];
b = 20;
c = true;
d = "";

if (b == "20") {
    console.log("Verdade");
} else {
    console.log("Falso");
}

// - Unary, Binary and Ternary

let number = 1;
console.log(number); // Unary
console.log(++number); // Unary
console.log(--number); // Unary

let number = 1;
console.log(number + 2); // Binary

let number = 1;
console.log(number > 1 ? true : false); // Ternary

// - new (new object)

let name = new String("Livio");
console.log(name);

// - Operadores Aritméticos

console.log(2 * 2);
console.log(2 / 2);
console.log(2 + 2);
console.log(2 - 2);
console.log(3 % 2); // resto
console.log(3 ** 2); // exponencial

let increment = 0
console.log(increment++) // 0 - incrementa depois
console.log(increment) // 1

let increment = 0
console.log(++increment) // 1 - incrementa antes
console.log(increment) // 1

let decrement = 1
console.log(--decrement) // 0 - decrementa antes
console.log(decrement) // 0

// - Operadores de atribuição

let number
console.log(`"number => ${number}`);
console.log(`"number = 1 => ${number = 1}`);
console.log(`"number += 1 => ${number += 1}`);
console.log(`"number -= 1 => ${number -= 1}`);
console.log(`"number *= 2 => ${number *= 2}`);
console.log(`"number /= 2 => ${number /= 2}`);
console.log(`"number += 2 => ${number += 2}`);
console.log(`"number %= 2 => ${number %= 2}`);
console.log(`"number += 2 => ${number += 2}`);
console.log(`"number **= 2 => ${number **= 2}`);

// - FALSY (valor = false em contextos onde um booleano é obrigatório)

console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log(-0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")

// - TRUTHY (valor = true em contextos onde um booleano é obrigatório)

console.log(true ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log(1 ? "verdadeiro" : "falso")
console.log(3.2 ? "verdadeiro" : "falso")
console.log("0" ? "verdadeiro" : "falso")
console.log("false" ? "verdadeiro" : "falso")
console.log(-1 ? "verdadeiro" : "falso")
console.log(Infinity ? "verdadeiro" : "falso")
console.log(-Infinity ? "verdadeiro" : "falso")

// - Operator precendence
/* 
()
! ++ --
*/
+-
< <= > >=
== != === !==
&&
||
?:
= += -= *= 
*/
