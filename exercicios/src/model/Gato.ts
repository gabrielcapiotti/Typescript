import Animal from "./Animal";

class Gato extends Animal {
    private nome: string;
    private cor: string;

    constructor(
        nome:string, 
        cor:string,
        raca:boolean
    ) 
        {
        super("Mamifero",raca);
        this.nome=nome;
        this.cor=cor;
    }
    emitirSom(): void {
        console.log("Miauuuuuaaauuuu");
    }
    trocarNome(nome: string){
        this.nome=nome;
    }
}

export default Gato;