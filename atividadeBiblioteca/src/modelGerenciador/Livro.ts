export class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    disponivel: boolean;
    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: number,
        disponivel: boolean,
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }
    detalhes(): string {
        return `
        Titulo: ${this.titulo}, 
        Autor: ${this.autor}, 
        Ano de Publicação: ${this.anoPublicacao}
        `;
    }
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log("Este livro não está disponível.");

        }

    }
    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log(`O livro "${this.titulo}" foi devolvido.`);
        } else {
            console.log("Este livro já está disponível.");
        }

    }

}