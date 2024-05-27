"use strict";
/*
### 5. Exercício: Polimorfismo
**Objetivo:** Demonstrar polimorfismo criando uma nova classe que sobrepõe um método da classe mãe.
#### Etapas:

1. **Criar uma nova classe que herda:**
   - Criar uma classe `Gerente` que herda de `Funcionario`.

2. **Sobrescrever um método:**
   - Sobrescrever o método `descreverCargo` para adicionar uma nova descrição.

#### Código:

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Gerente extends Funcionario_1.default {
    constructor(nome, idade, cargo) {
        super(nome, idade, cargo);
    }
    descreverCargo() {
        return `Sou ${this.nome}, sou o gerente responsável pelo setor de ${this.cargo}.`;
    }
}
const gerente = new Gerente("Pandora", 40, "TI");
console.log(gerente.saudacao()); // Saída: Olá, meu nome é Pandora e eu tenho 40 anos.
console.log(gerente.descreverCargo()); // Saída: Eu sou Pandora e eu sou o gerente responsável pelo setor de TI.
