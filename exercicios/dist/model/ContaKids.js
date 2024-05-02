"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaKids extends Conta_1.default {
    constructor(ContaPai, limite) {
        super(); // Chama o construtor da classe pai
        this.limite = limite;
        this.numeroContaKids = new Date().getTime() + "-K";
    }
    imprimirContaKids() {
        console.log("Conta pai:", this.numeroConta);
        console.log("Limite:", this.limite);
        console.log("Saldo:", this.retornaSaldo());
    }
}
exports.default = ContaKids;
