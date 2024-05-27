"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Critério {
    constructor(descricao, nivel) {
        this.descricao = descricao;
        this.nivel = nivel;
    }
    buscarDados() {
        return { descricao: this.descricao, nivel: this.nivel };
    }
    buscarNivel() {
        return this.nivel;
    }
}
exports.default = Critério;
