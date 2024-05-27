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



class Pessoas {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // métodos abaixo
    saudacao(): string {
        return `Olá! Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }

    atualizarNome(novoNome: string): void {
        this.nome = novoNome;
    }

    atualizarIdade(novaIdade: number): void {
        this.idade = novaIdade;
    }
}

const pessoa = new Pessoas("Pandora", 170);
console.log(pessoa.saudacao()); // Saída: Olá! Meu nome é Pandora e eu tenho 170 anos.


/*

### 2. Exercício: Adicionar Métodos para Modificar Propriedades
**Objetivo:** Adicionar métodos para atualizar o nome e a idade da pessoa.
#### Etapas:

1. **Adicionar métodos para atualizar propriedades:**
   - Criar métodos `atualizarNome` e `atualizarIdade`.

2. **Utilizar esses métodos:**
   - Demonstrar a atualização das propriedades usando os novos métodos.

#### Código:
*/

class Pessoas {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // métodos abaixo
    saudacao(): string {
        return `Olá! Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }

    atualizarNome(novoNome: string): void {
        this.nome = novoNome;
    }

    atualizarIdade(novaIdade: number): void {
        this.idade = novaIdade;
    }
}

const pessoas = new Pessoas("Pandora", 370);
console.log(pessoas.saudacao()); // Saída: Olá! Meu nome é Pandora e eu tenho 370 anos.

pessoas.atualizarNome("Nocturna");
pessoas.atualizarIdade(170);
console.log(pessoas.saudacao());//Saída: Olá! Meu nome é Nocturna e tenho 170 anos.

/*
### 3. Exercício: Criar uma Interface para a Classe
**Objetivo:** Criar uma interface `IPessoa` que define a estrutura da classe `Pessoa`.
#### Etapas:

1. **Definir a interface:**
   - Criar uma interface `IPessoa` com as propriedades e métodos.

2. **Implementar a interface na classe:**
   - Fazer com que a classe `Pessoa` implemente a interface `IPessoa`.

#### Código:
*/

interface IPessoas{
    nome:string;
    idade:number;
    saudacao():string;
    atualizarNome(novoNome:string):void;
    atualizarIdade(novaIdade:number):void;
}

class Pessoas implements IPessoas {
    nome:string;
    idade:number;
    constructor(
        nome:string,
        idade:number,
    ) 
    {
        this.nome=nome;
        this.idade=idade;
    }
    saudar(): string{
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    atualizarNome(novoNome:string):void{
        this.nome=novoNome;
    }
    atualizarIdade(novaIdade: number): void {
        this.idade=novaIdade;
    }
}
// Exemplo de uso:
const pessoas = new Pessoas("Pandora", 370);
console.log(pessoas.saudacao()); // Saída: Olá! Meu nome é Pandora e eu tenho 370 anos.

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

class Funcionario extends Pessoas {
    cargo:string;
    constructor(
        nome:string,
        idade:number,
        cargo:string,
    ) 
    {
        super(nome,idade);
        this.cargo=cargo;
    }
    descreverCargo():string{
        return `Eu sou ${this.nome} eu trabalho como  ${this.cargo}.`;
    }
}

const funcionario=new Funcionario("Pandora", 370, "Escritora");
console.log(funcionario.saudar());// Saída: Olá, meu nome é Ana e eu tenho 28 anos.
console.log(funcionario.descreverCargo()); // Saída: Eu sou Ana e eu trabalho como Desenvolvedora.



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

class Gerente extends Funcionario {
    constructor(
        nome:string,
        idade:number,
        cargo:string,
    ) 
    {
       super(nome,idade,cargo); 
    }
    descreverCargo():string{
        return `Sou ${this.nome}, sou o gerente responsável pelo setor de ${this.cargo}.`;
    }
}

const gerente = new Gerente("Pandora", 40, "TI");
console.log(gerente.saudacao()); // Saída: Olá, meu nome é Paulo e eu tenho 40 anos.
console.log(gerente.descreverCargo()); // Saída: Eu sou Paulo e eu sou o gerente responsável pelo setor de TI.





/*
### 6. Exercício: Uso de Módulos
**Objetivo:** Organizar o código em módulos.
#### Etapas:

1. **Criar um módulo:**
   - Separar a classe `Pessoa` em um arquivo próprio.

2. **Importar e usar o módulo:**
   - Importar a classe `Pessoa` em outro arquivo e usá-la.

#### Código:
**arquivo `Pessoa.ts`:**

*/

export class Pessoas{
    nome:string;
    idade:number;

    constructor(
        nome:string,
        idade:number
    )
    {
        this.nome=nome;
        this.idade=idade;
    }
    saudacao():string{
        return `Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos.`;
    }
    atualizarNome(novoNome:string): void{
        this.nome=novoNome;
    }
    atualizarIdade(novaIdade:number):void{
        this.idade=novaIdade;
    }

}

/*
**arquivo `app.ts`:**
*/
import { Pessoa } from './Pessoa';

const pessoa = new Pessoa("João", 30);
console.log(pessoa.saudar()); // Saída: Olá, meu nome é João e eu tenho 30 anos.
pessoa.atualizarNome("Carlos");
console.log(pessoa.saudar()); // Saída: Olá, meu nome é Carlos e eu tenho 30 anos.

/*
Com esses exercícios, você deve ter uma boa compreensão básica de TypeScript, classes, herança, polimorfismo, interfaces e módulos. Continuaremos avançando gradualmente com tópicos mais avançados se desejar!
*/