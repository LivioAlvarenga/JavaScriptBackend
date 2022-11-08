// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

/*
Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice.
*/

// - Acessando array
const notas = [10, 6.5, 8, 7.5];
console.log(notas[0], notas[1], notas[2], notas[3]);

// - array esparso
const arrayVazia = [, , ,];
console.log(arrayVazia);
arrayVazia.push(10);
console.log(arrayVazia);

// - array de duas dimensões
const nomes = ["João", "Maria"];
const notas = [10, 6.5];
const nomesNotas = [nomes, notas];
console.log(nomesNotas);
console.log(nomesNotas[0][0]);

// - Destructuring em JS (selecione bloco por bloco para testar)
const pares = [2, 4, 6, 8];
const ímpares = [1, 3, 5, 10];
let números = [pares, ímpares];
console.log(números);

números = [...pares, ...ímpares]; // destructuring
console.log(números);

const [num1, num2] = [1, 10];
console.log(num1, num2);

const [num1, num2, ...array1] = [1, 10, 2, 5, 23];
console.log(num1, num2, array1);

const pessoa = {
    nome: "Livio",
    idade: 23,
};
const pessoaTelefone = {
    ...pessoa,
    telefone: 319988775544,
};
console.log(pessoaTelefone);

const pessoa = {
    nome: "Livio",
    idade: 23,
};
console.log(pessoa.nome)
const { nome } = pessoa;
console.log(nome)

// - Métodos de array

// length especifica o tamanho de um array, ou melhor dizendo, o número de elementos.
const notas = [10, 6.5, 8, 7.5];
console.log(notas.length);

// push() significa "empurrar". No contexto de arrays, esse termo significa "inserir" na lista.
const notas = [10, 6.5, 8, 7.5];
console.log(notas);
notas.push(10);
console.log(notas);

// unshift() Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos. Altera o array original com o novo valor.
const notas = [10, 6.5, 8, 7.5];
console.log(notas);
notas.unshift(23);
console.log(notas);

// pop() remover o último elemento com o método pop()
const notas = [10, 6.5, 8, 7.5];
console.log(notas);
notas.pop();
console.log(notas);

// shift() Retira o primeiro elemento do array. Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
const notas = [10, 6.5, 8, 7.5];
console.log(notas);
notas.shift();
console.log(notas);

// concat() Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação. Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
const notasA = [10, 6.5, 7.5];
const notasB = [8, 7.5];
console.log(notasA.concat(notasB));

// filter() Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós. Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
const notas = [10, 6.5, 8, 7.5];
const result = notas.filter((nota) => nota > 7);
console.log(result);

// find() Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
const notas = [10, 6.5, 8, 7.5];
const result = notas.find((nota) => nota > 7);
console.log(result);

// findIndex() Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
const notas = [10, 6.5, 8, 7.5];
const result = notas.findIndex((nota) => nota > 7);
console.log(result);

// lastIndexOf() É igual o findIndex() porém começa do último elemento, não no primeiro.
const notas = [10, 6.5, 8, 7.5];
const result = notas.lastIndexOf((nota) => nota > 7);
console.log(result);

// includes() Retorna um booleano pesquisando um elemento na lista
const notas = [10, 6.5, 8, 7.5];
console.log(notas.includes(8));
console.log(notas.includes(23));

// forEach() Executa uma função em cada elemento do array de forma individual. Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
const notas = [10, 6.5, 8, 7.5];
const result = notas.forEach((nota) => console.log(nota));

// reduce() Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
const notas = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = notas.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial); // expected output: 10

// reduceRight() Funciona igual o reduce() porém começa do final do array e segue até o início.
const notas = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = notas.reduceRight(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial); // expected output: 10

// reverse() Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
const notas = [10, 6.5, 8, 7.5];
console.log(notas.reverse());

// slice() Copia uma parte do array para outro array.
const notas = [10, 6.5, 8, 7.5];
console.log(notas.slice(1));
console.log(notas.slice(1, 3));

// splice() é usado para adicionar e remover elementos de uma lista
const notas = [10, 6.5, 8, 7.5];
notas.splice(1, 2, "Livio");
console.log(notas);

// sort() Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
const notas = [10, 6.5, 8, 7.5];
console.log(notas.sort());
console.log(notas.sort((a, b) => a - b));
