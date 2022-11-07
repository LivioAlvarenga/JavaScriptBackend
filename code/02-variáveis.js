// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - Type
// Variáveis não são tipadas em Javascript, recebe o tipo após atribuição de valor
let variável;
console.log(typeof variável); // undefined
variável = 1;
console.log(typeof variável); // number
variável = "texto";
console.log(typeof variável); // string

// - var (global)
// escopo global
console.log("x antes do bloco = ", x); // undefined, mas a variável existe!
{
    // escopo local
    var x = 1;
}
console.log("x depois do bloco = ", x);

// - let (local)
// escopo global
console.log("x antes do bloco = ", x); // ReferenceError: x is not defined, a variável NÃO existe!
{
    // escopo local
    let x = 1;
    console.log("x dentro do bloco = ", x);
}
console.log("x depois do bloco = ", x);

// - const (local não muda em execução)
// escopo global
console.log("x antes do bloco = ", x); // ReferenceError: x is not defined, a variável NÃO existe!
{
    // escopo local
    const x = 1;
    console.log("x dentro do bloco = ", x);
    x = 2; // TypeError: Assignment to constant variable.
}
console.log("x depois do bloco = ", x);
