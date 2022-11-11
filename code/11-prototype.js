// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - acessando __proto__ no nodejs
const myString = "string";
console.log(myString.__proto__); // Não é mostrado os métodos associados ao objeto como no console do navegador

let protoObj = Object.getOwnPropertyNames(myString.__proto__);
console.log(protoObj);

protoObj = Object.getOwnPropertyNames(myString.__proto__.__proto__);
console.log(protoObj);

// - criando objeto que herda de outro objeto
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    };
}
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}
const ju = new ClientePoupanca("Ju", "55588844477711", "ju@email.com", 100, 200);
console.log(ju);

// - adicionando método com prototype
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    };
}
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

// ClientePoupanca sem método
const ju = new ClientePoupanca("Ju", "55588844477711", "ju@email.com", 100, 200);
console.log(ju.saldoPoup);

// Adicionando método com prototype
ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor;
};
ju.depositarPoup(30);
console.log(ju.saldoPoup);

// - own property (propriedade própria)
/* Além do nome e do valor, cada propriedade tem também três atributos:

*Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;

*Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;

*Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.

Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento têm estes três atributos como true.
*/
const catalogo = {
    editora: "Casa do Código",
    catalogo: [
        {
            id: 50,
            titulo: "Primeiros Passos com NodeJS",
            autor: "João Rubens",
            categoria: "programação",
            versoes: ["ebook", "impresso"],
        },
    ],
};
console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));
// A propriedade editora foi criada por nós e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável - ou seja, vai ser percorrida em um loop for...in e indexada a um array com Object.keys() ou Object.entries().
