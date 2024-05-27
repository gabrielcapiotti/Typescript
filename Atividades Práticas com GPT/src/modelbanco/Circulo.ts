import Forma from "./Forma";

class Circulo extends Forma {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

export default Circulo;
