// ! Selecione o código e de play, use a extensão codeRunner do Vscode para rodar trechos do código

/* 
>Curiosidades: 
    Até o ES6 o JavaScript não tinha classes.
    As classes não são hoisting, ou seja, não são jogadas para cima, devem ser declaradas antes do uso.

*/

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

// - atributos privados _ ou #
/*  
Existe uma proposta de implementação apresentada que ao colocar uma cerquilha (#) à frente do atributo e assim defini-lo como campo privado. https://github.com/tc39/proposal-class-fields#private-fields

A convenção da comunidade é de que se colocamos um underline (_) à frente de um atributo, isso significa que ele é privado. Mas não é privado de verdade, não fica realmente privado, mas é uma convenção da comunidade que não devemos mexer em atributos antecedidos pelo underline (_), ele não deve ser acessado de fora da classe. Apenas os métodos e comportamentos dentro do escopo da classe podem acessá-lo. Embora seja possível acessá-lo fora da classe, não é uma boa prática fazer isso.

Então, enquanto a proposta de campos privados não é oficialmente implementada, a convenção é usar o underline (_).
*/
class ContaCorrente {
    agencia;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}
// Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado. Apesar de ainda ser possível alterar essa propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe. Atualmente no Js nenhum atributo ou método é realmente privado, o JS é uma linguagem de escopo aberto e por isso é possível visualizar qualquer atributo ou propriedade de nossa classe.

// - modularizando código javascript

/* Criamos módulos para compartilhar código entre os diferentes arquivos do meu sistema, ajudando na organização dele. Dentro do JS cada arquivo é considerado um módulo e podemos escolher o que queremos exportar ou não a partir dele.

Para criarmos módulos seguimos os seguintes passos:

1 . Adicionamos export na class que queremos exportar.
*/
export class Cliente {
    nome;
    cpf;
}

// 2. Salvamos o arquivo com Primeira Letra Maiúscula. No exemplo seria Cliente.js Salvamos em ../modules/Cliente.js

// 3. Fazemos o import dos modulos
import { Cliente } from "../modules/Cliente.js";
import { ContaCorrente } from "../modules/ContaCorrente.js";

// 4. Criamos um package.json - O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. O arquivo gerado para este curso tem apenas algumas informações. Usamos npm init -y. Posteriormente adicionamos "type": "module"
import { Cliente } from "../modules/Cliente.js";
import { ContaCorrente } from "../modules/ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

console.log(cliente1.nome);
// Agora conseguimos acessar os módulos e ganhamos uma funcionalidade que deixa nosso código mais organizado.

// - getters e setters
// Para acessarmos propriedades privadas (_) usamos getters (get) e setters (set).

class ContaCorrente {
    _cliente;
    _saldo = 0;
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    } // Como saldo não queremos que mude diretamente adicionamos somente um get, assim protegemos nossa aplicação
}

// selecione daqui para baixo para testar
import { Cliente } from "../modules/Cliente.js";
import { ContaCorrente } from "../modules/ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

conta2.saldo = 30000; // veja que não conseguimos mudar o valor do saldo, pois não temos um set
console.log(conta2.saldo);

// - construtores

/* Construtores são utilizados para inicializar os atributos. A inicialização de atributos é a principal responsabilidade do construtor.

export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }  <======= Adicionamos construtor
}
*/

import { Cliente } from "../modules/Cliente.js";
import { ContaCorrente } from "../modules/ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
console.log(cliente1);
