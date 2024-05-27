/*
Exercício 4: Polimorfismo
Crie uma classe Passaro com um método voar. 
Em seguida, crie as classes Aguia e Pinguim 
que herdam de Passaro. A classe Aguia deve 
sobrescrever o método voar para indicar que 
está voando alto, enquanto a classe Pinguim 
deve sobrescrever o método para indicar que 
não pode voar. Crie uma função fazerPassaroVoar 
que receba um objeto do tipo Passaro e chame seu 
método voar.
*/

class Passaro {


  voar() {
    console.log("Voando");
  }
}


import Passaro from "./modelAnimais/Passaro";
import Aguia from "modelAnimais/Passaro"
import Pinguim from "./modelAnimais/Passaro/Pinguim";


function PassaroVoar(passaro:Passaro) {
    passaro.voar();
}

const aguia = new Aguia();
const pinguim = new pinguim();

PassaroVoar(Aguia);
PassaroVoar(Pinguim);