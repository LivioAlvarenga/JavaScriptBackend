// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

/* Obs!
Depois que a sequência de caracteres é definida, a string é imutável, ou seja, não poderá ter seu valor alterado.
Sempre que manipulamos uma string, é criada uma nova instância dela por baixo dos panos, o que significa que será gerado um novo espaço na memória com uma cópia do valor da string. Por isso, temos que utilizar uma variável para armazená-la.
*/

// - Conversão para string

const number = 10;
const numberString = new String(number);
console.log(numberString);

const number = 20;
console.log(number.toString());
console.log(typeof number.toString());

// - Concatenando strings

let nome = "André";
let sobreNome = "Silva";
let nomeCompleto = "Meu nome completo é : " + nome + " " + sobreNome;
console.log(nomeCompleto);
nomeCompleto = `Meu nome completo é : ${nome} ${sobreNome}`;
console.log(nomeCompleto);
nomeCompleto = `Meu nome completo é : `;
console.log(nomeCompleto.concat(nome + " ").concat(sobreNome));

// - Métodos para strings

// A propriedade length serve para nos informar o tamanho de uma string.
const palavra = "Livio";
console.log(palavra.length); // 5

// Com o método charAt() conseguimos acessar um caractere de uma string.
const palavra = "Livio";
console.log(palavra.charAt(2));

// A função indexOf(), que retorna a posição de um caractere dentro da string.
const palavra = "Livio";
console.log(palavra.indexOf("i"));

// toUpperCase() e toLowerCase()
const palavra = "Livio";
console.log(palavra.toUpperCase()); // LIVIO
console.log(palavra.toLowerCase()); // livio

// substr() permite que façamos a extração de parte de uma string
const palavra = "Livio Alvarenga";
console.log(palavra.substr(6, 9)); // Alvarenga
console.log(palavra.substr(0, 5)); // Livio

// slice(), é similar ao substring() e retornará parte de uma string, desde que passemos nos parâmetros o índice de início e de fim
const palavra = "Livio Alvarenga";
console.log(palavra.slice(6, 15)); // Alvarenga
console.log(palavra.slice(0, 5)); // Livio

// replace() temos a possibilidade de substituir parte de uma string por outra.
const palavra = "Livio Alvarenga";
console.log(palavra.replace("Livio", "Arthur")); // Arthur Alvarenga

// split() é bem interessante, pois com ele conseguimos quebrar uma string com base em caracteres separadores que vamos informar para o método como parâmetro.
const palavra = "Livio Alvarenga";
console.log(palavra.split(" ")); // [ 'Livio', 'Alvarenga' ]

// trim() remove os espaços em branco no início ou fim de uma string. No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight(), teste também estas variantes e veja o resultado obtido, ok?
const palavra = "   Livio   Alvarenga     ";
console.log(palavra.trim()); // Livio   Alvarenga
