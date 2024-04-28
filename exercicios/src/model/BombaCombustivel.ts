/*
5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.
*/

class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;
    
    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    
    abastecerPorValor(valorAbastecido: number) {
        if (this.quantidadeCombustivel < valorAbastecido / this.valorLitro) {
            console.log("Não há combustível suficiente na bomba");
            return console.log(`Quantidade de combustível disponível: ${this.quantidadeCombustivel} Litros`);
        }
        console.log(`Total de litros abastecido: ${valorAbastecido / this.valorLitro}`);
        this.quantidadeCombustivel -= valorAbastecido / this.valorLitro;
    }
    
    abastecerPorLitro(litrosAbastecido: number) {
        if (this.quantidadeCombustivel < litrosAbastecido) {
            console.log("Não há combustível suficiente na bomba");
            return console.log(`Quantidade de combustível disponível: ${this.quantidadeCombustivel} Litros`);
        }
        console.log(`Total a ser pago: R$ ${litrosAbastecido * this.valorLitro}`);
        this.quantidadeCombustivel -= litrosAbastecido;
    }
    
    alterarValor(novoValor: number) {
        this.valorLitro = novoValor;
    }
    
    alterarCombustivel(novoCombustivel: string) {
        this.tipoCombustivel = novoCombustivel;
    }
    
    alterarQuantidadeCombustivel(novaQuantidadeCombustivel: number) {
        this.quantidadeCombustivel = novaQuantidadeCombustivel;
    }
}

  
  export default BombaCombustivel;
