// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// -  for (laço de repetição clássico)
// Para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento). for(inicialização de uma variável; condição de continuação para o loop; expressão final)
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

// Parando um for com break, ao chegar no 5 para o for
for (let i = 10; i > 0; i--) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

// Ignorando um for com continue, ao chegar no 5 pula o código abaixo
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i); // no 5 será ignorado este código
}

// - for of
// Em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
const números = [100, 200, 300, 400, 500, 600];
let somaDasNotas = 0;
for (let número of números) {
  somaDasNotas += número;
}
const média = somaDasNotas / números.length;
console.log(média);

// - for in (index ou key)
const números = [100, 200, 300, 400, 500, 600];
for (let número in números) {
  console.log(número);
  console.log(números[número]); // desta forma acessamos o valor
}
// for of value
const números = [100, 200, 300, 400, 500, 600];
for (let número of números) {
  console.log(número);
}

// - forEach
/* para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc */
const números = [100, 200, 300, 400, 500, 600];
let somaDasNotas = 0;
números.forEach((número) => {
  somaDasNotas += número;
});
const média = somaDasNotas / números.length;
console.log(média);

// - while (enquanto)
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// - map()
// o map() gera um return (obs: forEach NÃO gera um return)
const números = [100, 200, 300, 400, 500, 600];
const númerosAtualizados = números.map((número) => {
  return ++número;
});
console.log(números);
console.log(númerosAtualizados);

// Padronizar dados em UpperCase
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const nomesPadronizados = nomes.map((nome) => {
  return nome.toUpperCase();
});
console.log(nomesPadronizados);

// Padronizar dados em UpperCase - omitir a palavra-chave return
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesPadronizados);

// - filter()
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];
//Quando iterar em um array você tem value e index, como so precisamos de index omitimos o value com _
const reprovados = alunos.filter((_, índice) => {
  return medias[índice] < 7;
});
console.log(reprovados);

// - reduce()
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
  const media = somaDasNotas / notasDaSala.length;
  return media;
}
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

/*
Num primeiro momento o reduce pode parecer um pouco mais complicado, ele tem uma lógica bem interna, abstrai bastante coisa. Mas, resumindo, usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista.

Por fim, o parâmetro acumulador também é muito chamado de acc, que é uma abreviação do nome dele em inglês. E também podemos usar diretamente o retorno da função arrow function, em vez de usar a palavra return, vamos fazer essas modificações no nosso código:
*/
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
  const media = somaDasNotas / notasDaSala.length;
  return media;
}
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

// - set() - Eliminando itens repetidos em um array
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados);

// otimizando código
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados);
