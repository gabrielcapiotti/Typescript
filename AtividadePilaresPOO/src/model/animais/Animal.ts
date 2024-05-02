// 3. Dado o seguinte diagrama:

//         animal

//  cachorro cavalo gato

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

abstract class Animal {
    protected comer: boolean;
    protected andar: boolean;
    protected respirar: boolean;
  
    constructor(comer = true, andar = true, respirar = true) {
      this.comer = comer;
      this.andar = andar;
      this.respirar = respirar;
    }
    abstract som(): void;
  }
  
  export default Animal;