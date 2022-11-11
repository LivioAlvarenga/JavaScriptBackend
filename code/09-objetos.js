// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - Adicionando e alterando dados
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    filha: { nome: "Maria", idade: 1 },
};
console.log(cliente);
cliente.sobrenome = "Silva";
console.log(cliente);
cliente.sobrenome = "Alvarenga";
console.log(cliente);
cliente.filha.nome = "Ana";
console.log(cliente);

// E se o cliente ter mais de uma filha? usamos [] para armazenar e métodos de array
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [{ nome: "Maria", idade: 1 }],
};
console.log(cliente.dependentes);
cliente.dependentes.push({ nome: "Ana", idade: 5 });
console.log(cliente.dependentes);

// - Adicionando dados com funções (métodos) dentro do objeto
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 },
    ],
    saldo: 10.0,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
console.log(cliente.saldo);
cliente.depositar(20.0);
console.log(cliente.saldo);

// - Acessando dados
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    filha: { nome: "Maria", idade: 1 },
};
console.log(cliente.nome);
console.log(cliente["nome"]);
console.log(
    `Os 3 primeiros dígitos do cpf do ${cliente.nome} são ${cliente.cpf.substring(0, 3)}`
);
console.log(cliente.filha.nome);

// Acessando o filho mais novo do cliente
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 },
    ],
};
console.log(cliente.dependentes);
const filhoMaisNovo = cliente.dependentes.reduce((acumulador, filho) => {
    return filho.idade < acumulador ? filho.idade : acumulador;
}, 200); // Acumulador é uma idade que estimamos que seja maior, ou seja, ninguém tem mais de 200 anos
console.log(filhoMaisNovo);

// Acessando dados com []
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
};
const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach((info) => console.log(cliente[info]));
// Passando uma chave que não existe ele retorno undefined
console.log(cliente["conta"]);

// - Deletando dados
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    filha: { nome: "Maria", idade: 1 },
};
console.log(cliente);
delete cliente.idade;
console.log(cliente);
// O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
let returnDelete = delete cliente.cpf;
console.log(`returnDelete = ${returnDelete}`); // true
returnDelete = delete cliente.cpf;
console.log(`returnDelete = ${returnDelete}`); // true
console.log(cliente.filha);
returnDelete = delete cliente.filha.idade;
console.log(cliente.filha);

// - Criando copia de objeto
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    filha: { nome: "Maria", idade: 1 },
};
// copiando de forma ERRADA! Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia.
console.log(cliente.nome);
const copiaCliente = cliente;
copiaCliente.nome = "Livio";
console.log(`cliente.nome = ${cliente.nome}`);
console.log(`copiaCliente.nome = ${copiaCliente.nome}`);

// copiando de forma correta com Object.create
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    filha: { nome: "Maria", idade: 1 },
};
console.log(cliente.nome);
const copiaCliente = Object.create(cliente);
copiaCliente.nome = "Livio";
console.log(`cliente.nome = ${cliente.nome}`);
console.log(`copiaCliente.nome = ${copiaCliente.nome}`);
// O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, copiaCliente é uma instância diferente de cliente e pode ser trabalhada de forma independente.

// - Percorrendo Objetos
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 },
    ],
    saldo: 10.0,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
let dados = "";
for (let info in cliente) {
    dados += `${info} ==> ${cliente[info]}\n`;
}
console.log(`dados: \n${dados}`);

// retirando function e object
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 },
    ],
    saldo: 10.0,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
let dados = "";
for (let info in cliente) {
    if (typeof cliente[info] === "function" || typeof cliente[info] === "object") {
        continue;
    } else {
        dados += `  ${info} ==> ${cliente[info]}\n`;
    }
}
console.log(`dados: \n${dados}`);

// - Convertendo objetos para array
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 },
    ],
    saldo: 10.0,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
console.log(Object.keys(cliente));
console.log(Object.values(cliente));
console.log(Object.entries(cliente));

// verificar se cliente tem dependentes
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 },
    ],
    saldo: 10.0,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
function possuiDependentes(obj) {
    const objectKeys = Object.keys(obj);
    if (objectKeys.includes("dependentes")) {
        console.log(`${obj.nome} possui dependentes`);
    }
}
possuiDependentes(cliente);

// - Extrair dados de objetos para array com spread operator (...)
const clientes = [
    {
        nome: "Andre",
        dependentes: [
            { nome: "Maria", idade: 10 },
            { nome: "João", idade: 5 },
        ],
    },
    {
        nome: "João",
        dependentes: [{ nome: "Lucas", idade: 18 }],
    },
    {
        nome: "José",
        dependentes: [],
    },
];
// vamos extrair todos os dependentes da base de dados clientes
const listaDependentes = [];
clientes.forEach((cliente) => listaDependentes.push(...cliente.dependentes))
console.table(listaDependentes);
// Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.
