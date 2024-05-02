import Conta from "./Conta";

class ContaKids extends Conta {
    private numeroContaKids: string;
    private limite: number;

    constructor(ContaPai: Conta, limite: number) {
        super(); // Chama o construtor da classe pai
        this.limite = limite;
        this.numeroContaKids = new Date().getTime() + "-K";
    }
    imprimirContaKids(){
        console.log("Conta pai:", this.numeroConta);
        console.log("Limite:", this.limite);
        console.log("Saldo:", this.retornaSaldo());      
    }
    
}

export default ContaKids;

