// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// JSON é um acrônimo de JavaScript Object Notation ou “notação de objeto JavaScript”. Como o próprio nome já sugere, JSON é um formato que utiliza a sintaxe de objetos e arrays do JavaScript. É muito versátil e se tornou a forma mais comum de estrutura para transferência de dados entre cliente/servidor, e tem sido utilizado mesmo em programas que não utilizam JavaScript.

// - Diferenças de sintaxe entre JSON e um objeto JavaScript
/*
* No JSON, as chaves sempre devem estar entre aspas duplas ” ”, no formato string. Já no objeto JavaScript, as aspas não são obrigatórias;

* O JSON aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null), objetos e arrays. Não é possível declarar funções/métodos;

* Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.
*/

// - JavaScript para o formato JSON para o formato JavaScript

const livro = {
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"],
};
console.log(livro);
const jsonLivro = JSON.stringify(livro);
console.log(jsonLivro);
const objLivro = JSON.parse(jsonLivro);
console.log(objLivro);
// O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização (ou marshaling em algumas linguagens como Go).
