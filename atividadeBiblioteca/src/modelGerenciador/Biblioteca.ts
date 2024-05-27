import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Biblioteca extends Livro {
    private livros: Livro[];

    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }
    removerLivro(titulo: string): void {
        const index = this.livros.findIndex(livro => livro.titulo === titulo);
        if (index !== -1) {
            this.livros.splice(index, 1);
            console.log(`Livro "${titulo}" removido da biblioteca.`);

        } else {
            console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
        }
    }
    buscarLivro(titulo: string): string {
        const livro = this.livros.find(livro => livro.titulo === titulo);
        return livro ? livro.detalhes() : `Livro "${titulo}" não encontrado na biblioteca.`;
    }
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1949, true);

livro1.emprestar();
livro1.emprestar();
livro1.devolver();