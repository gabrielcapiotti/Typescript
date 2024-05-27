"use strict";
/*

Ótimo! Vamos continuar com mais exercícios. Se tiver alguma dúvida ou quiser fazer alguma modificação, é só avisar!

### 4. Exercício: Criar uma Classe de Carro
**Objetivo:** Criar uma classe `Carro` que tenha propriedades para armazenar a marca, o modelo e o ano do carro.
#### Etapas:

1. **Definir a classe e propriedades:**
   - Criar uma classe `Carro`.
   - Adicionar propriedades `marca`, `modelo` e `ano`.

2. **Adicionar um construtor:**
   - Inicializar `marca`, `modelo` e `ano` no construtor.

3. **Criar um método:**
   - Adicionar um método `detalhes` que retorna uma string com as informações do carro.

#### Código:

*/
class Moto {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        return `Moto: ${this.marca} ${this.modelo} Ano: ${this.ano}`;
    }
    atualizarAno(novoAno) {
        this.ano = novoAno;
    }
}
const minhaMoto = new Moto("Kawasaki", "Ninja", 2022);
console.log(minhaMoto.detalhes()); // Saída: Moto: Kawasaki Ninja, Ano: 2022
minhaMoto.atualizarAno(2024);
console.log(minhaMoto.detalhes()); // Saída: Moto: Kawasaki Ninja, Ano: 2024
/*
Explicando cada parte do código:

1. Definição da Classe e Propriedades
- A classe `Moto` possui três propriedades: `marca`, `modelo` e `ano`.


class Moto {
    marca: string;
    modelo: string;
    ano: number;


2. Adicionar um Construtor
- O construtor inicializa as propriedades `marca`, `modelo` e `ano` com os valores passados como argumentos.

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

3. Métodos da Classe
- O método `detalhes()` retorna uma string com os detalhes da moto.
- O método `atualizarAno()` atualiza a propriedade `ano` com o novo valor fornecido.


    detalhes(): string {
        return `Moto: ${this.marca} ${this.modelo} Ano: ${this.ano}`;
    }

    atualizarAno(novoAno: number): void {
        this.ano = novoAno;
    }
}

4. Criação e Uso de uma Instância
- Criamos uma instância da classe `Moto` com a marca "Kawasaki", modelo "Ninja" e ano 2022.
- Utilizamos os métodos `detalhes()` e `atualizarAno()` para exibir e atualizar as informações da moto.

const minhaMoto = new Moto("Kawasaki", "Ninja", 2022);
console.log(minhaMoto.detalhes()); // Saída: Moto: Kawasaki Ninja, Ano: 2022

minhaMoto.atualizarAno(2024);
console.log(minhaMoto.detalhes()); // Saída: Moto: Kawasaki Ninja, Ano: 2024


Se precisar de mais alguma ajuda ou quiser avançar com exercícios mais complexos, estou à disposição!
*/
/*
1. **Definir a classe e propriedades:**
   - Criar uma classe `Carro`.
   - Adicionar propriedades `marca`, `modelo` e `ano`.
   */
class Carro {
    /*
2. **Adicionar um construtor:**
   - Inicializar `marca`, `modelo` e `ano` no construtor.
   */
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    /*
3. **Criar um método:**
   - Adicionar um método `detalhes` que retorna uma string com as informações do carro.
   */
    detalhes() {
        return `Carro: ${this.marca} ${this.modelo} Ano: ${this.ano}`;
    }
    /*
4. **Adicionar método para atualizar propriedade:**
   - Criar um método `atualizarAno` que recebe um novo ano como parâmetro e atualiza a propriedade `ano`.
   */
    atualizarAno(novoAno) {
        this.ano = novoAno;
    }
}
const meuCarro = new Carro("Toyota", "Corolla", 2022);
console.log(meuCarro.detalhes()); // Saída: Carro: Toyota Corolla, Ano: 2022
/*
2. **Utilizar o método:**
- Demonstrar a atualização do ano usando o novo método.
*/
meuCarro.atualizarAno(2023);
console.log(meuCarro.detalhes()); // Saída: Carro: Toyota Corolla, Ano: 2023
/*

### 5. Exercício: Adicionar um Método para Atualizar o Ano do Carro
**Objetivo:** Adicionar um método para atualizar o ano do carro.
#### Etapas:

1. **Adicionar método para atualizar propriedade:**
   - Criar um método `atualizarAno` que recebe um novo ano como parâmetro e atualiza a propriedade `ano`.

2. **Utilizar o método:**
   - Demonstrar a atualização do ano usando o novo método.

#### Código:

*/
