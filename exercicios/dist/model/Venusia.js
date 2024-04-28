"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venusia {
    constructor(id, nome, sobrenome, conjuge, vida) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.conjuge = conjuge;
        this.vida = vida;
    }
    pessoaViva() {
        if (this.vida === true) {
            console.log("Esse familiar está vivo!");
        }
        else {
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
function criarFamiliar() {
    var _a;
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
    const vidaString = (_a = prompt("O familiar está vivo? (sim/não)")) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
    const vida = vidaString === "sim";
    return new Venusia(id, nome, sobrenome, conjuge, vida);
}
function informacoesFamiliar(membro) {
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
exports.default = Venusia;
