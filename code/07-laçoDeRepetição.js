// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// -  for (laço de repetição clássico)
// Para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).
const números = [100, 200, 300, 400, 500, 600];
// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco
let somaDasNotas = 0;
for (let i = 0; i < números.length; i++) {
    somaDasNotas += números[i];
}
const média = somaDasNotas / números.length;
console.log(média);

// - for of
// Em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
const números = [100, 200, 300, 400, 500, 600];
let somaDasNotas = 0;
for (let número of números) {
    somaDasNotas += número;
}
const média = somaDasNotas / números.length;
console.log(média);

// - forEach
// para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;
const números = [100, 200, 300, 400, 500, 600];
let somaDasNotas = 0;
números.forEach((número) => {
    somaDasNotas += número;
});
const média = somaDasNotas / números.length;
console.log(média);
