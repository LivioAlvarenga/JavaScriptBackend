// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

// - Criando uma class
class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    } // os métodos NÃO precisam ter function
    exibirSaldo() {
        console.log(this.saldo);
    }
}
const andre = new Cliente("Andre", "andre@email.com", "112233665544", 100);
console.log(andre);
andre.exibirSaldo();
andre.depositar(10);
andre.exibirSaldo();

// - this
// O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.

const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function () {
        console.log(`${pessoa.nome}`);
    },
};
pessoa.imprimeNome(); //Ana
// Veja que o método imprimeNome() faz referência ao próprio objeto pessoa. O JavaScript tem uma forma melhor de fazer isso, que não “acopla” o método ao nome do objeto:
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function () {
        console.log(`${this.nome}`);
    },
};
pessoa.imprimeNome(); //Ana

// - desacoplar um método do objeto com this
// Dentro de cada objeto, criamos um método que chama a função externa imprimeNomeEmail(). Essa função é executada no contexto de cada um dos objetos e o this faz com que ela utilize os valores de propriedade desses objetos.
function imprimeNomeEmail() {
    console.log(`nome: ${this.nome}, email ${this.email}`);
}
const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail,
};
const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail,
};
pessoa1.imprimeInfo(); //nome: Ana, email a@email.com
pessoa2.imprimeInfo(); //nome: Paula, email p@email.com

// É possível manipular os valores de this e o JavaScript tem três métodos para isso:
// - call()
function imprimeNomeEmail(tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`);
}
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com",
};
const cliente2 = {
    nome: "Fred",
    email: "f@email.com",
};
imprimeNomeEmail.call(cliente1, "cliente especial"); // cliente especial - nome: Carlos, email: c@email.com
imprimeNomeEmail.call(cliente2, "cliente estudante"); // cliente estudante - nome: Fred, email: f@email.com
/*
Como a função está sendo chamada como objeto do método call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos.

O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.
*/

// - apply()
// O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:
function imprimeNomeEmail(tipoCliente, agencia) {
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `);
}
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com",
};
const cliente2 = {
    nome: "Fred",
    email: "f@email.com",
};
const clienteEspecial = ["cliente especial", "Rio de Janeiro"];
const clienteEstudante = ["cliente estudante", "Fortaleza"];

imprimeNomeEmail.apply(cliente1, clienteEspecial);
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
imprimeNomeEmail.apply(cliente2, clienteEstudante);
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com
// Utilize o método apply() caso você tenha um array de dados e o call() para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.

// - bind()
// O método bind() “prende” ou “liga” uma função ao contexto de um objeto.
const personagem = {
    nome: "Princesa Leia",
    apresentar: function () {
        return `a personagem é ${this.nome}`;
    },
};
// o que acontece se tentarmos executar essa função a partir de outro contexto:
const personagemGenerico = personagem.apresentar;
console.log(personagemGenerico()); //a personagem é undefined
// Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this.
const personagemDefinido = personagemGenerico.bind(personagem);
console.log(personagemDefinido()); //a personagem é Princesa Leia
/*
utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem. Assim, sempre que esta função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. Dessa forma, this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.
*/

// - herança
class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        console.log(this.saldo);
    }
}
// ClientePoupanca herda de Cliente
class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}
const andre = new ClientePoupanca("Andre", "a@email.com", "2255887744", 100, 200);
console.log(andre);
andre.depositar(50);
andre.depositarPoupanca(50);
console.log(andre);
