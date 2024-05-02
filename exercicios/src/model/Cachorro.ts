import Animal from "./Animal";

class Cachorro extends Animal {
    private nomeRaca: string;
    private nome: string;

    constructor(
        nomeRaca: string,
        nome: string,
        raca: boolean
    ) {
        super('Mamifero', raca);
        this.nomeRaca = nomeRaca;
        this.nome = nome;
        this.raca=raca
    }

    emitirSom(): void {
        console.log("Auauauauauauau...");
    }
}

export default Cachorro;
