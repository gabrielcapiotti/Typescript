import { Livro } from "./Livro";

Livro

export class Usuario {
    private nome: string;
    private id: number;
    private livroEmprestado:Livro[];

    constructor(nome:string, id:number){
        this.nome=nome;
        this.id=id;
        this.livroEmprestado=[];
    }

    emprestarLivro(){
        this.emprestarLivro();
    }
    devolverLivro(){
        this.devolverLivro();
    }

}

    /*
    livro: Livro;
    dataRetirada: Date;
    dataDevolucao: Date;

    constructor(nome: string, livro: Livro, dataRetirada: Date, dataDevolucao: Date) {
        this.nome = nome;
        this.livro = livro;
        this.dataRetirada = dataRetirada;
        this.dataDevolucao = dataDevolucao;
    }

    detalhesEmprestimo(): string {
        return `Usuário: ${this.nome}, Livro: ${this.livro.titulo}, Data de Retirada: ${this.dataRetirada.toDateString()}, Data de Devolução: ${this.dataDevolucao.toDateString()}`;
    }
}
*/