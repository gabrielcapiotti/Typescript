"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./model/Animal"));
const Produto_1 = __importDefault(require("./model/Produto"));
const Stock_1 = __importDefault(require("./model/Stock"));
const Livro_1 = __importDefault(require("./model/Livro"));
const animal1 = new Animal_1.default('Réptil', 4, true, 'Crocodilo');
const animal2 = new Animal_1.default('Canino', 4, true);
console.log(animal1);
console.log(animal2);
animal1.respirar(); // Alterei para chamar o método correto respirar() em vez de andar()
animal2.respirar();
const produto1 = new Produto_1.default("Caneta", 18.28);
const produto2 = new Produto_1.default("Caneca", 50.00);
function ativarProduto(produtoParametro) {
    if (produtoParametro.ativo) {
        console.log("OPS! Produto já está ativo.");
    }
    else {
        produtoParametro.ativar();
    }
}
ativarProduto(produto2);
console.log("-----------------------");
produto1.alterarPreco(150.99);
produto2.alterarPreco(60.99);
console.log("-----------------------");
produto1.imprimir();
produto2.imprimir();
const estoque = new Stock_1.default(); // Instancie o estoque aqui
estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);
estoque.aumentarQuantidadePorPadrao();
estoque.diminuirQuantidadePorPadrao();
estoque.aumentarQuantidadePorQuantidade(5);
estoque.diminuirQuantidadePorQuantidade(2);
Livro_1.default.qtdPaginas(); // Saída: Esse livro tem 500 páginas.
informacoesFamiliar(membroFamiliar);
