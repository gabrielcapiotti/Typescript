"use strict";
/*
5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.
*/
Object.defineProperty(exports, "__esModule", { value: true });
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    abastecerPorValor(valorAbastecido) {
        if (this.quantidadeCombustivel < valorAbastecido / this.valorLitro) {
            console.log("Não há combustível suficiente na bomba");
            return console.log(`Quantidade de combustível disponível: ${this.quantidadeCombustivel} Litros`);
        }
        console.log(`Total de litros abastecido: ${valorAbastecido / this.valorLitro}`);
        this.quantidadeCombustivel -= valorAbastecido / this.valorLitro;
    }
    abastecerPorLitro(litrosAbastecido) {
        if (this.quantidadeCombustivel < litrosAbastecido) {
            console.log("Não há combustível suficiente na bomba");
            return console.log(`Quantidade de combustível disponível: ${this.quantidadeCombustivel} Litros`);
        }
        console.log(`Total a ser pago: R$ ${litrosAbastecido * this.valorLitro}`);
        this.quantidadeCombustivel -= litrosAbastecido;
    }
    alterarValor(novoValor) {
        this.valorLitro = novoValor;
    }
    alterarCombustivel(novoCombustivel) {
        this.tipoCombustivel = novoCombustivel;
    }
    alterarQuantidadeCombustivel(novaQuantidadeCombustivel) {
        this.quantidadeCombustivel = novaQuantidadeCombustivel;
    }
}
exports.default = BombaCombustivel;
