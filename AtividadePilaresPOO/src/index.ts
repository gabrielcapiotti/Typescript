// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

import Normal from "./model/ingresso/Normal";
import Vip from "./model/ingresso/Vip";
import Camarote from "./model/ingresso/Camarote";

const ingressoNormal = new Normal(20);
const ingressoVip = new Vip(20);
const ingressoCamarote = new Camarote(20);

ingressoNormal.imprimeValor();
ingressoVip.imprimeValor();
ingressoCamarote.imprimeValor();

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

console.log("///////////////////////////////////////////////////");

import Novo from "./model/imovel/Novo";
import Velho from "./model/imovel/Velho";

const imovelNovo = new Novo("ue", 2000, 1000);
imovelNovo.imprimirValor();

const imovelVelho = new Velho("ua", 2000, 500);
imovelVelho.imprimirValor();

// 3. Dado o seguinte diagrama:

//         animal

//  cachorro cavalo gato

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

console.log("///////////////////////////////////////////////////");

import Cachorro from "./model/animais/Cachorro";
import Gato from "./model/animais/Gato";
import Cavalo from "./model/animais/Cavalo";

const cachorro = new Cachorro();
const gato = new Gato();
const cavalo = new Cavalo();

cachorro.som();
console.log("/");
gato.som();
console.log("/");
cavalo.som();