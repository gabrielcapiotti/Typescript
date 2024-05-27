"use strict";
/*

Claro! Vamos começar com exercícios simples e ir avançando gradativamente. A cada etapa, descreveremos a lógica e forneceremos um exemplo de código para tornar a tarefa mais visual.
### 1. Exercício: Criar uma Classe Simples
**Objetivo:** Criar uma classe `Pessoa` que tenha propriedades para armazenar o nome e a idade de uma pessoa.
#### Etapas:

1. **Definir a classe e propriedades:**
   - Criar uma classe `Pessoa`.
   - Adicionar propriedades `nome` e `idade`.

2. **Adicionar um construtor:**
   - Inicializar `nome` e `idade` no construtor.

3. **Criar um método:**
   - Adicionar um método `saudar` que retorna uma saudação com o nome da pessoa.

#### Código:


*/
class Pessoas {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    atualizarNome(novoNome) {
        this.nome = novoNome;
    }
    atualizarIdade(novaIdade) {
        this.idade = novaIdade;
    }
}
// Exemplo de uso:
const pessoa = new Pessoas("Pandora", 370);
console.log(pessoa.saudacao()); // Saída: Olá! Meu nome é Pandora e eu tenho 370 anos.
