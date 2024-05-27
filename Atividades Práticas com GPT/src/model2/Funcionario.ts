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
import { Pessoas } from "./Pessoas";

class Funcionario extends Pessoas {
    cargo: string;

    constructor(
        nome: string,
        idade: number,
        cargo: string,
    ) {
        super(nome, idade);
        this.cargo = cargo;
    }

    descreverCargo(): string {
        return `Eu sou ${this.nome} e eu trabalho como ${this.cargo}.`;
    }
}

const funcionario = new Funcionario("Pandora", 370, "Escritora");
console.log(funcionario.saudacao()); // Saída: Olá! Meu nome é Pandora e eu tenho 370 anos.
console.log(funcionario.descreverCargo()); // Saída: Eu sou Pandora e eu trabalho como Escritora.

export default Funcionario;
