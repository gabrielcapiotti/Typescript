/*
Exercício:
Crie um arquivo TypeScript chamado calculadora.ts.

Implemente uma classe Calculadora que tenha métodos para realizar operações de soma, subtração, multiplicação e divisão.

Compile o arquivo TypeScript e teste as funcionalidades da sua calculadora.
*/

class Calculo {
    constructor(
        public valor1:number,
        public valor2:number,
    ){}

    soma():number{
        return this.valor1 + this.valor2;
    }
    subtrair():number{
        return this.valor1 + this.valor2;
    }
    multiplicar():number{
        return this.valor1 + this.valor2;
    }
    dividir():number{
        if (this.valor2===0) {
            throw new Error("Divisão por zero não é permitida.");
        } else {
            return this.valor1/this.valor2;
        }
    }

}

// Exemplo de uso:

const calculadora = new Calculo(10,5);
console.log("Soma:", calculadora.soma()); // Saída: 15
console.log("Subtração:", calculadora.subtrair()); // Saída: 5
console.log("Multiplicação", calculadora.multiplicar()); // Saída: 50
console.log("Divisão:", calculadora.dividir()); // Saída: 2

/*
### Explicação

1. **Definição da Classe e Construtor:**
    - A classe `Calculo` é definida com um construtor que aceita dois parâmetros `valor1` e `valor2` e os atribui às propriedades públicas da classe.

2. **Métodos da Classe:**
    - Os métodos `soma`, `multiplicar`, `subtrair` e `dividir` são definidos fora do construtor, cada um realizando a operação matemática correspondente.

3. **Tratamento de Erro:**
    - No método `dividir`, é verificado se `valor2` é zero para evitar uma divisão por zero, lançando um erro apropriado.

4. **Exemplo de Uso:**
    - Uma instância da classe `Calculadora` é criada com valores `10` e `5`. Os métodos são chamados e os resultados são exibidos no console.

### Testando o Código

Você pode testar este código em um ambiente TypeScript para garantir que tudo esteja funcionando conforme o esperado. Se você encontrar algum problema ou tiver mais dúvidas, sinta-se à vontade para perguntar!
*/



/*
Ótimo! Vamos continuar aprofundando no TypeScript. A seguir, abordaremos alguns conceitos importantes e avançados da linguagem, como interfaces, herança, polimorfismo, e a utilização de módulos.

### 1. Interfaces

Interfaces em TypeScript são usadas para definir a estrutura de um objeto. Elas ajudam a garantir que os objetos tenham formas específicas.

#### Exemplo de Interface

*/
interface ICalculadora {
    valor1: number;
    valor2: number;
    soma(): number;
    multiplicar(): number;
    subtrair(): number;
    dividir(): number;
}

class Calculadora implements ICalculadora {
    constructor(
        public valor1: number,
        public valor2: number
    ) {}

    soma(): number {
        return this.valor1 + this.valor2;
    }

    multiplicar(): number {
        return this.valor1 * this.valor2;
    }

    subtrair(): number {
        return this.valor1 - this.valor2;
    }

    dividir(): number {
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
    constructor(valor1: number, valor2: number) {
        super(valor1, valor2);
    }

    potencia(): number {
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
    constructor(valor1: number, valor2: number) {
        super(valor1, valor2);
    }

    // Sobrescrevendo o método de soma para adicionar uma operação diferente
    soma(): number {
        console.log("Usando soma científica.");
        return super.soma();
    }

    raizQuadrada(): number {
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

export class Calculadora {
    constructor(
        public valor1: number,
        public valor2: number
    ) {}

    soma(): number {
        return this.valor1 + this.valor2;
    }

    multiplicar(): number {
        return this.valor1 * this.valor2;
    }

    subtrair(): number {
        return this.valor1 - this.valor2;
    }

    dividir(): number {
        if (this.valor2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return this.valor1 / this.valor2;
    }
}
/*

**arquivo `app.ts`:**
*/

import { Calculadora } from './calculadora';

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

let valor: number | string;
valor = 5; // OK
valor = "cinco"; // OK
/*

#### Generics

Permitem criar componentes que funcionam com uma variedade de tipos.

*/

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(5)); // Saída: 5
console.log(identity<string>("Hello")); // Saída: Hello
/*

### Recapitulação e Prática

Com esses conceitos, você agora possui uma boa base para trabalhar com TypeScript em projetos mais complexos. Pratique implementando suas próprias classes, interfaces, e experimentando com herança e polimorfismo. Além disso, divida seu código em módulos para melhorar a organização e a manutenção.

Se precisar de mais detalhes sobre qualquer um desses tópicos ou desejar aprender algo específico, sinta-se à vontade para perguntar!
*/