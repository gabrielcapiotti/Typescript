/*
Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.
*/

let acc = 1;

class Conta {
    numero: number;
    nome: string;
    saldo: number;

    constructor(nome: string, saldo: number = 0) {
        this.numero = acc++;
        this.nome = nome;
        this.saldo = saldo;
    }

    alterarNome(nome: string) {
        this.nome = nome;
    }

    deposito(valor: number) {
        this.saldo += valor;
    }

    saque(valor: number) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
            console.log(this.saldo);
            return;
        } else {
            this.saldo -= valor;
            console.log(`Novo saldo: R$ ${this.saldo}`);
        }
    }
}

export default Conta;
