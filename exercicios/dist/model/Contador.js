"use strict";
/*
1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.
*/
/*
class Contador {
    contador: number;

    constructor(contador: number) {
        this.contador = contador;
    }

    zerar() {
        this.contador = 0;
    }

    incrementar() {
        this.contador++;
    }

    retornar() {
        console.log(this.contador);
    }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Contador {
    constructor(contador) {
        this.contador = contador;
    }
    zerar() {
        this.contador = 0;
    }
    incrementar() {
        this.contador++;
    }
    retornar() {
        console.log(this.contador);
    }
}
exports.default = Contador;
