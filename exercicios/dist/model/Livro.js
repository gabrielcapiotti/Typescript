"use strict";
/*
class Livro {
    nome: string;
    tipoCapa: string;
    paginas: number;

    constructor(
        nome: string,
        tipoCapa: string,
        paginas: number
    ) {
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


export default livro;
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(qtdLivros, nome, tipoCapa, paginas) {
        this.qtdLivros = qtdLivros;
        this.nome = nome;
        this.tipoCapa = tipoCapa;
        this.paginas = paginas;
    }
    exibirDetalhes() {
        console.log(`Esse box da série ${this.nome} tem ao todo ${this.qtdLivros} livros, 
        e cada um contém ${this.paginas} páginas e todos dessa edição são do tipo ${this.tipoCapa}.`);
    }
}
const boxHerdeirodaMana = new Box(7, "Herdeiro da Mana", "Capa dura", 800);
boxHerdeirodaMana.exibirDetalhes();
exports.default = Box;
