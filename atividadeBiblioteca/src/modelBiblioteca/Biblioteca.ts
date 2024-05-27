


/*
Claro! Aqui estão mais alguns exercícios para praticar conceitos avançados de TypeScript, incluindo herança, polimorfismo, encapsulamento, e manipulação de arrays:
### Exercício 1: Sistema de Biblioteca
**Objetivo:** Criar um sistema de gerenciamento de livros em uma biblioteca.
#### Etapas:


1. **Criar uma classe `Livro`:**
   - Propriedades: `titulo`, `autor`, `anoPublicacao`.
   - Método `detalhes`: retorna uma string com os detalhes do livro.

2. **Criar uma classe `Biblioteca`:**
   - Propriedade: `livros` (array de `Livro`).
   - Método `adicionarLivro`: adiciona um novo livro ao array.
   - Método `removerLivro`: remove um livro do array pelo título.
   - Método `buscarLivro`: busca um livro pelo título e retorna seus detalhes.

#### Código:
*/
/*
class Livro {
    titulo:string;
    autor:string;
    anoPublicacao:number;
    constructor(
        titulo:string,
        autor:string,
        anoPublicacao:number
    ) 
    {
        this.titulo=titulo;
        this.autor=autor;
        this.anoPublicacao=anoPublicacao;
    }
    detalhes():string {
        return `
        Titulo: ${this.titulo}, 
        Autor: ${this.autor}, 
        Ano de Publicação: ${this.anoPublicacao}
        `;
    }
}

class Biblioteca {
    private livros:Livro[];

    constructor() {
        this.livros=[];
    }
    adicionarLivro(livro:Livro):void{
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }
    removerLivro(titulo:string):void {
        const index=this.livros.findIndex(livro=>livro.titulo===titulo);
        if (index !== -1) {
            this.livros.splice(index,1);
            console.log(`Livro "${titulo}" removido da biblioteca.`);
            
        } else {
            console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
        }
    }
    buscarLivro(titulo:string):string{
        const livro=this.livros.find(livro =>livro.titulo=== titulo);
        return livro ? livro.detalhes(): `Livro "${titulo}" não encontrado na biblioteca.`;
    }
}

const biblioteca = new Biblioteca();
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = new Livro("1984", "George Orwell", 1949);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

console.log(biblioteca.buscarLivro("1984"));
biblioteca.removerLivro("O Senhor dos Anéis");
console.log(biblioteca.buscarLivro("O Senhor dos Anéis"));



/*
### Exercício 2: Sistema de Veículos

**Objetivo:** Criar um sistema de gerenciamento de veículos com diferentes tipos de veículos.

#### Etapas:

1. **Criar uma classe `Veiculo`:**
   - Propriedades: `marca`, `modelo`, `ano`.
   - Método `detalhes`: retorna uma string com os detalhes do veículo.

2. **Criar classes `Carro` e `Moto` que herdam de `Veiculo`:**
   - Cada uma deve ter propriedades adicionais específicas.

3. **Criar uma classe `Frota`:**
   - Propriedade: `veiculos` (array de `Veiculo`).
   - Métodos para adicionar veículos, remover veículos, e buscar veículos pelo modelo.
*/

class Veiculo {
    marca:string;
    modelo:string;
    ano:number;
    constructor(
        marca:string,
        modelo:string,
        ano:number,
    ) 
    {
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
    detalhes():string{
        return `
        Marca: ${this.marca}, 
        Modelo: ${this.modelo}, 
        Ano: ${this.ano}`;
    }
}

class Carro extends Veiculo {
    portas:number;

    constructor(
        marca:string,
        modelo:string,
        ano:number,
        portas:number,
    ) 
    {
    super(marca, modelo, ano);
    this.portas=portas;    
    }
    detalhes():string{
        return `${super.detalhes()}, Portas: ${this.portas}`;
    }
}

class Moto extends Veiculo {
    cilindradas: number;

    constructor(
        marca: string, 
        modelo: string, 
        ano: number, 
        cilindradas: number
    ) 
    {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    detalhes(): string {
        return `${super.detalhes()}, Cilindradas: ${this.cilindradas}`;
    }
}

class Frota {
    private veiculos: Veiculo[];

    constructor() {
        this.veiculos=[];
    }
    adicionarVeiculo(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
        console.log(`Veículo "${veiculo.modelo}" adicionado à frota.`);
    }
    removerVeiculo(modelo:string):void {
        const index = this.veiculos.findIndex(veiculo => veiculo.modelo === modelo);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
            console.log(`Veiculo "${modelo}" removido da frota`);
        } else {
            console.log(`Veiculo "${modelo}" não encontrado na frota.`);
        }
    }
    buscarVeiculo(modelo:string):string {
        const veiculo = this.veiculos.find(veiculo => veiculo.modelo === modelo);
        return veiculo ? veiculo.detalhes(): `Veículo "${modelo}" não encontrado na frota.`;
    }
}

const frota = new Frota();
const carro = new Carro("Toyota", "Corolla", 2020, 4);
const moto = new Moto("Yamaha", "YZF-R3", 2019, 321);

frota.adicionarVeiculo(carro);
frota.adicionarVeiculo(moto);

console.log(frota.buscarVeiculo("Corolla"));
frota.removerVeiculo("YZF-R3");
console.log(frota.buscarVeiculo("YZF-R3"));



/*
### Exercício 3: Sistema de Estudantes
**Objetivo:** Criar um sistema de gerenciamento de estudantes em uma escola.
#### Etapas:

1. **Criar uma classe `Estudante`:**
   - Propriedades: `nome`, `idade`, `matricula`.
   - Método `detalhes`: retorna uma string com os detalhes do estudante.
2. **Criar uma classe `Escola`:**
   - Propriedade: `estudantes` (array de `Estudante`).
   - Métodos para adicionar estudantes, remover estudantes, e buscar estudantes pela matrícula.
#### Código:
*/

class Estudante {
    nome:string;
    idade:number;
    matricula:string;
    constructor(
        nome:string, 
        idade:number, 
        matricula:string
    )
    {
        this.nome=nome;
        this.idade=idade;
        this.matricula=matricula;
    }
    detalhes():string {
        return `
        Nome: ${this.nome}, 
        Idade: ${this.idade}, 
        Matrícula: ${this.matricula}
        `;
    }
}

class Escola {
    private estudantes: Estudante[];
    
    constructor() {
        this.estudantes=[];
    }
    adicionarEstudante(estudante:Estudante):void {
        this.estudantes.push(estudante);
        console.log(`Estudante "${estudante.nome}" adicionado à escola.`);  
    }
    removerEstudante(matricula:string):void{
        const index = this.estudantes.findIndex(estudante => estudante.matricula = matricula);
        if (index !== -1) {
            this.estudantes.splice(index, 1);
            console.log(`Estudante com matrícula "${matricula}" removido da escola.`);
        } else {
            console.log(`Estudante com matricula "${matricula}" não encontrado na escola.`);
            
        }
    }
    buscarEstudante(matricula:string):string{
        const estudante = this.estudantes.find(estudante => estudante.matricula === matricula);
        return estudante ? estudante.detalhes() :`Estudante com matrícula "${matricula}" não encontrado na escola.`;
    }
}

const escola = new Escola();
const estudante1 = new Estudante("Alice", 20, "1234154");
const estudante2 = new Estudante("Bob", 22, "2344332");

escola.adicionarEstudante(estudante1);
escola.adicionarEstudante(estudante2);

console.log(escola.buscarEstudante("2021001"));
escola.removerEstudante("2021002");
console.log(escola.buscarEstudante("2021002"));







