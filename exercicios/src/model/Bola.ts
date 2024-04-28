/*
2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor
*/
class Bola {
    cor: string;
    circunferencia: number;
    material: string;
    
    constructor(
        cor: string, 
        circunferencia: number, 
        material: string
    ) 
    {
      this.cor = cor;
      this.circunferencia = circunferencia;
      this.material = material;
    }
    trocarCor(cor: string) {
      this.cor = cor;
    }
    mostrarCor() {
      console.log(this.cor);
    }
  }
  
  export default Bola;