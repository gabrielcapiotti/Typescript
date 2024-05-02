"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(tipo, raca) {
        this.tipo = tipo;
        this.raca = raca;
    }
    respirar() {
        console.log("Respirando...");
    }
}
exports.default = Animal;
