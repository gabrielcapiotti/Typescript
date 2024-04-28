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