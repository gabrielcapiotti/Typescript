// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

import Ingresso from "./Ingresso";

class Vip extends Ingresso {
  constructor(valor: number) {
    super(valor);
  }
  imprimeValor() {
    console.log(this.valor + 5);
  }
}
export default Vip;