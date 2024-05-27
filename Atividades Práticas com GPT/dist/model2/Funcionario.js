"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
### 4. Exercício: Herança
**Objetivo:** Criar uma classe `Funcionario` que herda de `Pessoa` e adiciona uma propriedade para o cargo do funcionário.
#### Etapas:

1. **Criar a classe filha:**
   - Criar uma classe `Funcionario` que herda de `Pessoa`.

2. **Adicionar uma nova propriedade:**
   - Adicionar uma propriedade `cargo`.

3. **Adicionar métodos específicos:**
   - Adicionar métodos específicos para a classe `Funcionario`.

#### Código:

*/
const Pessoas_1 = require("./Pessoas");
class Funcionario extends Pessoas_1.Pessoas {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }
    descreverCargo() {
        return `Eu sou ${this.nome} e eu trabalho como ${this.cargo}.`;
    }
}
const funcionario = new Funcionario("Pandora", 370, "Escritora");
console.log(funcionario.saudacao()); // Saída: Olá! Meu nome é Pandora e eu tenho 370 anos.
console.log(funcionario.descreverCargo()); // Saída: Eu sou Pandora e eu trabalho como Escritora.
exports.default = Funcionario;
