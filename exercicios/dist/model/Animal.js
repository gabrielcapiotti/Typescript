"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(tipoParametro, patasParametro, dentesParametro, nomeParametro) {
        this.tipo = tipoParametro;
        this.patas = patasParametro;
        this.dentes = dentesParametro;
        this.nome = nomeParametro;
    }
    respirar() {
        console.log("Respirando...");
    }
    andar() {
        console.log("Andando...");
    }
}
exports.default = Animal;
