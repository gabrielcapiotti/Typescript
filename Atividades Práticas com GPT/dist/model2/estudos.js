"use strict";
/*
Exercício:
Crie um arquivo TypeScript chamado calculadora.ts.

Implemente uma classe Calculadora que tenha métodos para realizar operações de soma, subtração, multiplicação e divisão.

Compile o arquivo TypeScript e teste as funcionalidades da sua calculadora.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculo {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    soma() {
        return this.valor1 + this.valor2;
    }
    subtrair() {
        return this.valor1 + this.valor2;
    }
    multiplicar() {
        return this.valor1 + this.valor2;
    }
    dividir() {
        if (this.valor2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        else {
            return this.valor1 / this.valor2;
        }
    }
}
// Exemplo de uso:
const calculadora = new Calculo(10, 5);
console.log("Soma:", calculadora.soma()); // Saída: 15
console.log("Subtração:", calculadora.subtrair()); // Saída: 5
console.log("Multiplicação", calculadora.multiplicar()); // Saída: 50
console.log("Divisão:", calculadora.dividir()); // Saída: 2
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    soma() {
        return this.valor1 + this.valor2;
    }
    multiplicar() {
        return this.valor1 * this.valor2;
    }
    subtrair() {
        return this.valor1 - this.valor2;
    }
    dividir() {
        if (this.valor2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return this.valor1 / this.valor2;
    }
}
/*
Neste exemplo, a classe `Calculadora` implementa a interface `ICalculadora`, garantindo que ela possui todos os métodos e propriedades definidos na interface.

### 2. Herança

A herança permite que uma classe filha herde propriedades e métodos de uma classe mãe.

#### Exemplo de Herança
*/
class CalculadoraAvancada extends Calculadora {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }
    potencia() {
        return Math.pow(this.valor1, this.valor2);
    }
}
// Exemplo de uso:
const calcAvancada = new CalculadoraAvancada(2, 3);
console.log("Potência:", calcAvancada.potencia()); // Saída: 8
console.log("Soma:", calcAvancada.soma()); // Saída: 5
/*

### 3. Polimorfismo

O polimorfismo permite que métodos de uma classe sejam usados de diferentes formas.

#### Exemplo de Polimorfismo

Vamos criar outra classe que herda de `Calculadora` e sobrepõe um método.

*/
class CalculadoraCientifica extends Calculadora {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }
    // Sobrescrevendo o método de soma para adicionar uma operação diferente
    soma() {
        console.log("Usando soma científica.");
        return super.soma();
    }
    raizQuadrada() {
        return Math.sqrt(this.valor1);
    }
}
// Exemplo de uso:
const calcCientifica = new CalculadoraCientifica(16, 4);
console.log("Soma Científica:", calcCientifica.soma()); // Saída: Usando soma científica. 20
console.log("Raiz Quadrada:", calcCientifica.raizQuadrada()); // Saída: 4
/*

### 4. Módulos

Os módulos permitem organizar o código em arquivos separados e reutilizá-los em diferentes partes do aplicativo.

#### Exemplo de Módulos

**arquivo `calculadora.ts`:**

*/
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    soma() {
        return this.valor1 + this.valor2;
    }
    multiplicar() {
        return this.valor1 * this.valor2;
    }
    subtrair() {
        return this.valor1 - this.valor2;
    }
    dividir() {
        if (this.valor2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return this.valor1 / this.valor2;
    }
}
exports.Calculadora = Calculadora;
const calc = new Calculadora(20, 5);
console.log("Soma:", calc.soma());
console.log("Subtração:", calc.subtrair());
console.log("Multiplicação:", calc.multiplicar());
console.log("Divisão:", calc.dividir());
/*

### 5. Tipos Avançados

TypeScript possui tipos avançados, como Union Types, Intersection Types, e Generics.

#### Union Types

Permitem que uma variável tenha mais de um tipo.

*/
let valor;
valor = 5; // OK
valor = "cinco"; // OK
/*

#### Generics

Permitem criar componentes que funcionam com uma variedade de tipos.

*/
function identity(arg) {
    return arg;
}
console.log(identity(5)); // Saída: 5
console.log(identity("Hello")); // Saída: Hello
/*

### Recapitulação e Prática

Com esses conceitos, você agora possui uma boa base para trabalhar com TypeScript em projetos mais complexos. Pratique implementando suas próprias classes, interfaces, e experimentando com herança e polimorfismo. Além disso, divida seu código em módulos para melhorar a organização e a manutenção.

Se precisar de mais detalhes sobre qualquer um desses tópicos ou desejar aprender algo específico, sinta-se à vontade para perguntar!
*/ 
