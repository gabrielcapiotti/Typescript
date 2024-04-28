"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stock {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    aumentarQuantidadePorPadrao() {
        this.produtos.forEach(produto => produto.quantidade++);
        console.log("Quantidade de todos os produtos aumentada.");
    }
    diminuirQuantidadePorPadrao() {
        this.produtos.forEach(produto => {
            if (produto.quantidade > 0)
                produto.quantidade--;
        });
        console.log("Quantidade de todos os produtos diminuída.");
    }
    aumentarQuantidadePorQuantidade(quantidade) {
        this.produtos.forEach(produto => produto.quantidade += quantidade);
        console.log(`Quantidade de todos os produtos aumentada em ${quantidade}.`);
    }
    diminuirQuantidadePorQuantidade(quantidade) {
        this.produtos.forEach(produto => {
            if (produto.quantidade >= quantidade)
                produto.quantidade -= quantidade;
        });
        console.log(`Quantidade de todos os produtos diminuída em ${quantidade}.`);
    }
}
exports.default = Stock;
