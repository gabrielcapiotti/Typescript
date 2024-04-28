"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, quantidade = 0, ativo = true) {
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
    alterarPreco(novoPreco) {
        this.preco = novoPreco;
    }
}
exports.default = Produto;
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
