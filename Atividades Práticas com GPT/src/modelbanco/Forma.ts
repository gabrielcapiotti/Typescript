/*
Exercício 2: Abstração
Crie uma classe abstrata Forma com métodos abstratos 
calcularArea e calcularPerimetro. Em seguida, crie 
as classes Circulo e Retangulo que herdam de Forma 
e implementam esses métodos. A classe Circulo deve 
ter um atributo raio, e a classe Retangulo deve ter 
atributos largura e altura.*/


abstract class Forma {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

export default Forma;





/*
import Circulo from "./model/Circulo"
import Retangulo from "./model/Retangulo"

const circulo = new Circulo(5);
const retangulo = new Retangulo(54,2);
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimentro());
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimento());
*/