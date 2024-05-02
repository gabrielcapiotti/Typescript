"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(nomeRaca, nome, raca) {
        super('Mamifero', raca);
        this.nomeRaca = nomeRaca;
        this.nome = nome;
        this.raca = raca;
    }
    emitirSom() {
        console.log("Auauauauauauau...");
    }
}
exports.default = Cachorro;
