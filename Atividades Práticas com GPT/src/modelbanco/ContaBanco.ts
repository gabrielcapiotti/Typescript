/*
Exercício 1: Encapsulamento
Crie uma classe ContaBancaria que represente uma conta bancária. 
Esta classe deve ter um atributo privado saldo e métodos públicos 
para depositar (depositar), sacar (sacar) e consultar o saldo (consultarSaldo). 
Garanta que o saldo não possa ser alterado diretamente de fora da classe.
*/

class ContaBancaria {
    private nome: string;
    private senha: number;
    private saldo: number;

    constructor(nome: string, senha: number) {
        this.nome = nome;
        this.senha = senha;
        this.saldo = 0; // Saldo inicial começa em 0
    }

    // Método para depositar dinheiro
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }

    // Método para sacar dinheiro
    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque.");
        } else {
            console.log("Valor de saque deve ser positivo.");
        }
    }

    // Método para consultar saldo
    consultarSaldo(): string {
        return `Saldo atual: R$${this.saldo.toFixed(2)}`;
    }
}

// Exemplo de uso:
const minhaConta = new ContaBancaria("Pandora", 1234);

// Consultar saldo inicial
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$0.00

// Realizar um depósito
minhaConta.depositar(500); // Saída: Depósito de R$500.00 realizado com sucesso.

// Consultar saldo após depósito
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$500.00

// Realizar um saque
minhaConta.sacar(20); // Saída: Saque de R$200.00 realizado com sucesso.

// Consultar saldo após saque
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$300.00

// Tentar realizar um saque com saldo insuficiente
minhaConta.sacar(400); // Saída: Saldo insuficiente para saque.

// Consultar saldo após tentativa de saque com saldo insuficiente
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$300.00

export default ContaBancaria;