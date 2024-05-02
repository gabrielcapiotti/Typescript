"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor
*/
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(cor) {
        this.cor = cor;
    }
    mostrarCor() {
        console.log(this.cor);
    }
}
exports.default = Bola;
