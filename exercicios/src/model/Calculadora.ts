/*
4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico.
*/

class Calculadora {
    armazenamento: number[];
    constructor() {
      this.armazenamento = [];
    }
    somar(numeroUm: number, numeroDois: number) {
      numeroUm + numeroDois;
      console.log(numeroUm + numeroDois);
      this.armazenamento.push(numeroUm + numeroDois);
    }
    multiplicar(numeroUm: number, numeroDois: number) {
      numeroUm * numeroDois;
      console.log(numeroUm * numeroDois);
      this.armazenamento.push(numeroUm * numeroDois);
    }
    dividir(numeroUm: number, numeroDois: number) {
  numeroUm / numeroDois;
      console.log(numeroUm / numeroDois);
      this.armazenamento.push(numeroUm / numeroDois);
    }
    diminuir(numeroUm: number, numeroDois: number) {
      numeroUm - numeroDois;
      console.log(numeroUm - numeroDois);
      this.armazenamento.push(numeroUm - numeroDois);
    }
    historico() {
      console.log(this.armazenamento);
    }
  }
  
  export default Calculadora;