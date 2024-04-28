"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    constructor(nome, tipoCapa, paginas) {
        this.nome = nome;
        this.tipoCapa = tipoCapa;
        this.paginas = paginas;
    }
    qtdPaginas() {
        console.log(`Esse livro tem ${this.paginas} páginas.`);
    }
}
const livro = new Livro("Harry Potter", "Dura", 500);
livro.qtdPaginas(); // Saída: Esse livro tem 500 páginas.
exports.default = livro;
