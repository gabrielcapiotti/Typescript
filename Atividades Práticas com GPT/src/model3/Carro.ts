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
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes(): string {
        return `Moto: ${this.marca} ${this.modelo} Ano: ${this.ano}`;
    }

    atualizarAno(novoAno: number): void {
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
    marca:string;
    modelo:string;
    ano:number;
    /*
2. **Adicionar um construtor:**
   - Inicializar `marca`, `modelo` e `ano` no construtor.
   */
    constructor(
        marca:string,
        modelo:string,
        ano:number
    ) 
    {
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
    /*
3. **Criar um método:**
   - Adicionar um método `detalhes` que retorna uma string com as informações do carro.
   */
    detalhes():string{
        return `Carro: ${this.marca} ${this.modelo} Ano: ${this.ano}`;
    }
    /*
4. **Adicionar método para atualizar propriedade:**
   - Criar um método `atualizarAno` que recebe um novo ano como parâmetro e atualiza a propriedade `ano`.
   */
    atualizarAno(novoAno:number):void{
        this.ano=novoAno;
    }

}

const meuCarro = new Carro("Toyota", "Corolla", 2022);
console.log(meuCarro.detalhes()); // Saída: Carro: Toyota Corolla, Ano: 2022

/*
2. **Utilizar o método:**
- Demonstrar a atualização do ano usando o novo método.
*/
meuCarro.atualizarAno(2023);
console.log(meuCarro.detalhes());// Saída: Carro: Toyota Corolla, Ano: 2023







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





/*
Você deve criar uma classe TypeScript chamada Carro com as seguintes características:

A classe Carro deve ter as seguintes propriedades:

marca: uma string representando a marca do carro.
modelo: uma string representando o modelo do carro.
ano: um número representando o ano de fabricação do carro.
velocidade: um número representando a velocidade atual do carro em km/h, inicialmente 0.
keep
Fixada
A classe Carro deve ter os seguintes métodos:

Um método construtor que receba a marca, modelo e ano do carro e inicialize as propriedades correspondentes.
Um método acelerar(velocidade: number), que aumenta a velocidade do carro de acordo com o valor passado como argumento. Esse método deve exibir uma mensagem informando a nova velocidade do carro.
Um método frear(), que reduz a velocidade do carro para 0. Se o carro já estiver parado, deve exibir uma mensagem informando que o carro já está par


class Carrao {
    private marca: string;
    private modelo: string;
    private ano: number;
    private velocidade: number;

    constructor(
        marca:string, 
        modelo:string, 
        ano:number, 
        velocidade:number
    ) 
    {
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
        this.velocidade=0;
    }
    acelerar(velocidade:number) { 
        this.velocidade += velocidade;
        console.log(`A velocidade do carro é: ${this.velocidade}`);
        
    }
    freiar(){
        if (this.velocidade=0) {
            console.log(`O carro já está parado! ${this.velocidade}`);
            
        } else {
            this.velocidade=0;
            console.log(`O carro parou. ${this.velocidade}`);
            
        }
    }
    informacoes(){
        console.log(`Carro: ${this.marca} ${this.modelo} Ano: ${this.ano} Velocidade: ${this.velocidade}`);
    }

}

const meuCarrao = new Carrao("Toyota", "Corolla", 2022, 0);

meuCarrao.acelerar(20);
meuCarrao.informacoes();
meuCarrao.freiar();
*/

/*
// Atributos:
// id: um número inteiro representando o identificador único do cliente.
// nome: uma string representando o nome do cliente.
// idade: um número inteiro representando a idade do cliente.
// Métodos:
// constructor(id: number, nome: string, idade: number): um construtor que recebe o ID, nome e idade do cliente e os atribui aos atributos correspondentes.
// apresentarCliente(): um método que imprime no console as informações do cliente (ID, nome e idade).
-----------------------------------------------------------
// Classe Cliente:
// Atributos:
// id: um número inteiro representando o identificador único do cliente.
// nome: uma string representando o nome do cliente.
// idade: um número inteiro representando a idade do cliente.
// Métodos:
// constructor(id: number, nome: string, idade: number): um construtor que recebe o ID, nome e idade do cliente e os atribui aos atributos correspondentes.
// apresentarCliente(): um método que imprime no console as informações do cliente (ID, nome e idade).
*/

class  {
    constructor(parameters) {
        
    }
}




