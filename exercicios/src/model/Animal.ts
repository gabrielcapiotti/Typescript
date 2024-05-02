abstract class Animal {
    protected tipo: 'Reptil' | 'Ave' | 'Mamifero';
    protected raca: boolean;

    constructor(
        tipo: 'Reptil' | 'Ave' | 'Mamifero',
        raca: boolean
    ) {
        this.tipo = tipo;
        this.raca = raca;
    }

    abstract emitirSom(): void;

    public respirar(): void{
        console.log("Respirando...");
        
    }
}

export default Animal;
