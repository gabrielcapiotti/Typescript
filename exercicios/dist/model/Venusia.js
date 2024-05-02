"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Definindo a classe Venusia
class Venusia {
    constructor(id, nome = "Pandora", sobrenome = "Venusia-MorningStar", conjuge = "Nocturna MorningStar", vida) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.conjuge = conjuge;
        this.vida = vida;
    }
    // Método para exibir informações do membro familiar
    exibirInformacoes() {
        console.log(`Nome: ${this.nome} ${this.sobrenome}`);
        console.log(`Cônjuge: ${this.conjuge}`);
        console.log(`Estado de Vida: ${this.vida ? "Vivo" : "Falecido"}`);
    }
}
// Criando uma instância da classe Venusia
const membroFamiliar = new Venusia(1, "Sêlune", "Venusia", "Eriel Venusia", true);
// Chamando o método exibirInformacoes() na instância criada
membroFamiliar.exibirInformacoes();
exports.default = Venusia;
/*
pessoaViva() {
    if (this.vida === true) {
        console.log("Esse familiar está vivo!");
    } else {
        console.log("Infelizmente esse familiar faleceu.");
    }
}

claFamiliar() {
    switch (this.sobrenome) {
        case "Venusia":
            console.log("Esse membro pertence ao clã materno Venusia.");
            break;
        case "Venusia-MorningStar":
            console.log("Esse membro pertence ao clã Venusia-MorningStar.");
            break;
        case "Heartfire":
            console.log("Esse membro pertence ao clã Heartfire.");
            break;
        case "VenuStar":
            console.log("Esse membro pertence ao clã VenuStar.");
            break;
        case "Venusia-Kerrigan":
            console.log("Esse membro pertence ao clã Venusia-Kerrigan.");
            break;
        case "Venuttia":
            console.log("Esse membro pertence ao clã Venuttia.");
            break;
        case "Venusia-Rosewood":
            console.log("Esse membro pertence ao clã Venusia-Rosewood.");
            break;
        case "MorningStar-Capiotti":
            console.log("Esse membro pertence ao clã MorningStar-Capiotti.");
            break;
        default:
            console.log("Clã familiar não reconhecido.");
            break;
    }
}

static criarFamiliar(): Venusia {
    const id = Number(prompt("Informe o ID do familiar:"));
    const nome = prompt("Informe o nome do familiar:");
    if (nome === null) {
        throw new Error("Nome não informado.");
    }
    const sobrenome = prompt("Informe o sobrenome do familiar:");
    if (sobrenome === null) {
        throw new Error("Sobrenome não informado.");
    }
    const conjuge = prompt("Informe o nome do cônjuge do familiar:");
    if (conjuge === null) {
        throw new Error("Nome do cônjuge não informado.");
    }
    const vidaString = prompt("O familiar está vivo? (sim/não)")?.toLocaleLowerCase();
    const vida = vidaString === "sim";
    return new Venusia(id, nome, sobrenome, conjuge, vida);
}

static informacoesFamiliar(membro: Venusia) {
    console.log(`Nome: ${membro.nome} ${membro.sobrenome}`);
    console.log(`Conjuge: ${membro.conjuge}`);
    console.log(`Estado de Vida: ${membro.vida ? "Vivo" : "Falecido"}`);
    console.log(("-------------------"));
}
}
*/
/*







// Criar um membro familiar com base nas informações fornecidas pelo usuário
const membroFamiliar = criarFamiliar();

// Mostrar as informações do membro familiar
informacoesFamiliar(membroFamiliar);

// Verificar o clã familiar do membro
membroFamiliar.claFamiliar();




export default Venusia;




const animal1 = new Animal('Réptil', 4, true, 'Crocodilo');
const animal2 = new Animal('Canino', 4, true);

console.log(animal1);
console.log(animal2);

animal1.respirar(); // Alterei para chamar o método correto respirar() em vez de andar()
animal2.respirar();

const produto1 = new Produto("Caneta", 18.28);
const produto2 = new Produto("Caneca", 50.00);

function ativarProduto(produtoParametro: Produto) {
    if (produtoParametro.ativo) {
        console.log("OPS! Produto já está ativo.");
    } else {
        produtoParametro.ativar();
    }
}

ativarProduto(produto2);
console.log("-----------------------");

produto1.alterarPreco(150.99);
produto2.alterarPreco(60.99);
console.log("-----------------------");

produto1.imprimir();
produto2.imprimir();

const estoque = new Stock(); // Instancie o estoque aqui

estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);

estoque.aumentarQuantidadePorPadrao();
estoque.diminuirQuantidadePorPadrao();
estoque.aumentarQuantidadePorQuantidade(5);
estoque.diminuirQuantidadePorQuantidade(2);

Livro.qtdPaginas(); // Saída: Esse livro tem 500 páginas.


const contador = new Contador(2)
contador.retornar();



import Produto from './Produto';

class Stock {
    produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    aumentarQuantidadePorPadrao() {
        this.produtos.forEach(produto => produto.quantidade++);
        console.log("Quantidade de todos os produtos aumentada.");
    }

    diminuirQuantidadePorPadrao() {
        this.produtos.forEach(produto => {
            if (produto.quantidade > 0) produto.quantidade--;
        });
        console.log("Quantidade de todos os produtos diminuída.");
    }

    aumentarQuantidadePorQuantidade(quantidade: number) {
        this.produtos.forEach(produto => produto.quantidade += quantidade);
        console.log(`Quantidade de todos os produtos aumentada em ${quantidade}.`);
    }

    diminuirQuantidadePorQuantidade(quantidade: number) {
        this.produtos.forEach(produto => {
            if (produto.quantidade >= quantidade) produto.quantidade -= quantidade;
        });
        console.log(`Quantidade de todos os produtos diminuída em ${quantidade}.`);
    }
}

export default Stock;



class Produto {
    id: number;
    nome: string;
    preco: number;
    ativo: boolean;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number = 0, ativo: boolean = true) {
        this.id = new Date().getTime();
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.ativo = ativo;
    }

    desativar() {
        this.ativo = false;
        console.log("Produto desativado com sucesso.");
    }

    ativar() {
        this.ativo = true;
        console.log("Produto ativado com sucesso!");
    }

    imprimir() {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Ativo: ${this.ativo ? 'Sim' : 'Não'}`);
    }

    alterarPreco(novoPreco: number) {
        this.preco = novoPreco;
    }
}

export default Produto;
*/
/*
class Venusia {
    id: number;
    nome: string;
    sobrenome: string;
    conjuge: string;
    vida: boolean;

    constructor(
        id: number,
        nome: string,
        sobrenome: string,
        conjuge: string,
        vida: boolean
    )
    {
        this.id = id
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.conjuge = conjuge;
        this.vida = vida;
    }
*/
/*
    pessoaViva() {
        if (this.vida === true) {
            console.log("Esse familiar está vivo!");
        } else {
            console.log("Infelizmente esse familiar faleceu.");
        }
    }

    claFamiliar() {
        switch (this.sobrenome) {
            case "Venusia":
                console.log("Esse membro pertence ao clã materno Venusia");
                break;
            case "Venusia-MorningStar":
                console.log("Esse membro pertence ao clã MorningStar");
                break;
            case "Heartfire":
                console.log("Esse membro pertence ao clã Heartfire");
                break;
            case "VenuStar":
                console.log("Esse membro pertence ao clã VenuStar");
                break;
            case "MorningStar-Capiotti":
                console.log("Esse membro pertence ao clã MorningStar-Capiotti");
                break;
            case "Venusia-Kerrigan":
                console.log("Esse membro pertence ao clã Venusia-Kerrigan");
                break;
            case "Venusia-Rosewood":
                console.log("Esse membro pertence ao clã Venusia-Rosewood");
                break;
            case "Venuttia":
                console.log("Esse membro pertence ao clã Venuttia");
                break;
            default:
                console.log("Clã familiar não reconhecido.");
        }
    }
}

function criarFamiliar(): Venusia {
    const id = Number(prompt("Informe o ID do familiar:"));
    const nome = prompt("Informe o nome do familiar:");
    if (nome === null) {
        throw new Error("Nome não informado.");
    }
    const sobrenome = prompt("Informe o sobrenome do familiar:");
    if (sobrenome === null) {
        throw new Error("Sobrenome não informado.");
    }
    const conjuge = prompt("Informe o nome do cônjuge do familiar:");
    if (conjuge === null) {
        throw new Error("Nome do cônjuge não informado.");
    }
    const vidaString = prompt("O familiar está vivo? (sim/não)")?.toLocaleLowerCase();
    const vida = vidaString === "sim";
    return new Venusia(id, nome, sobrenome, conjuge, vida);
}

function informacoesFamiliar(membro: Venusia) {
    console.log(`Nome: ${membro.nome} ${membro.sobrenome}`);
    console.log(`Conjuge: ${membro.conjuge}`);
    console.log(`Estado de Vida: ${membro.vida ? "Vivo" : "Falecido"}`);
    console.log(("-------------------"));

}

// Criar um membro familiar com base nas informações fornecidas pelo usuário
const membroFamiliar = criarFamiliar();

// Mostrar as informações do membro familiar
informacoesFamiliar(membroFamiliar);

// Verificar o clã familiar do membro
membroFamiliar.claFamiliar();
*/
