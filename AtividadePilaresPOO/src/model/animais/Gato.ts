// 3. Dado o seguinte diagrama:

//         animal

//  cachorro cavalo gato

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

import Animal from "./Animal";

class Gato extends Animal {
  som(): void {
    console.log(`Gato comer? ${this.comer}`);
    console.log(`Gato anda? ${this.andar}`);
    console.log(`Gato respira? ${this.respirar}`);
    console.log("Gato faz miau");
  }
}

export default Gato;