"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(documento, nome, idade, sexo) {
        this.documento = documento;
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    buscarDocumento() {
        return this.documento;
    }
    buscarNome() {
        return this.nome;
    }
    buscarDados() {
        return {
            nome: this.nome,
            documento: this.documento,
            idade: this.idade,
            sexo: this.sexo
        };
    }
}
exports.default = Pessoa;
