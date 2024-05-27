"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
/* Estrutura de classe */
class Animal {
    constructor(tipoParametro, patasParametro, dentesParametro, nomeParametro) {
        this.tipo = tipoParametro;
        this.patas = patasParametro;
        this.dentes = dentesParametro;
        this.nome = nomeParametro || "Sem nome"; // valor padrão se não fornecido
    }
    respirando() {
        console.log("...");
    }
}
const animal1 = new Animal("Canino", 4, true, "Cacau");
const animal2 = new Animal("Periquito", 2, true, "Pi");
console.log(animal1);
console.log(animal2);
/*
Claro! Aqui está um exercício baseado no modelo de código fornecido, que visa praticar a criação de classes, instanciamento de objetos, e a definição de métodos.

### Exercício: Criando e Manipulando Objetos de uma Classe

#### Objetivo
Criar uma classe `Vehicle` que represente veículos. Esta classe deve ter atributos e métodos para definir e exibir informações sobre diferentes tipos de veículos. Você também vai instanciar objetos dessa classe e utilizar seus métodos.

#### Passos

1. **Definir a Classe `Vehicle`**
   - Crie a classe `Vehicle` com os seguintes atributos:
     - `type` (tipo do veículo, por exemplo, "carro", "moto", "caminhão")
     - `wheels` (número de rodas)
     - `engine` (booleano, se possui motor ou não)
     - `brand` (marca do veículo)

2. **Criar o Construtor**
   - O construtor da classe deve receber e inicializar os valores para `type`, `wheels`, `engine` e `brand`.

3. **Adicionar Métodos**
   - Adicione um método `startEngine` que imprime uma mensagem diferente dependendo se o veículo tem um motor ou não.
   - Adicione um método `displayInfo` que imprime todas as informações do veículo.

4. **Instanciar Objetos**
   - Crie pelo menos dois objetos da classe `Vehicle` com diferentes valores.
   - Chame os métodos `startEngine` e `displayInfo` para cada objeto.

### Exemplo de Código

Aqui está um esqueleto do código que você deve completar:

```typescript
console.log("Vehicle Information");
*/
/* Estrutura de classe */
class Veiculo {
    constructor(tipoParametro, marcaParametro, rodasParametro, motorParametro) {
        this.tipo = tipoParametro;
        this.marca = marcaParametro;
        this.rodas = rodasParametro;
        this.motor = motorParametro;
    }
    iniciarMotor() {
        if (this.motor) {
            console.log(`${this.marca} ${this.tipo} do motor, foi iniciado.`);
        }
        else {
            console.log(`${this.marca} ${this.tipo} Não foi encontrado esse motor.`);
        }
    }
    informacoes() {
        console.log(`tipo: ${this.tipo}`);
        console.log(`rodas: ${this.rodas}`);
        console.log(`motor: ${this.motor ? "Yes" : "No"}`);
        console.log(`marca: ${this.marca}`);
    }
}
// Criando objetos da classe Veiculo
const veiculo1 = new Veiculo("Carro", "Chevrolet", 4, true);
const veiculo2 = new Veiculo("Carro", "Ferrari", 4, true);
const veiculo3 = new Veiculo("Bicicleta", "Caloi", 2, false);
const veiculo4 = new Veiculo("Moto", "Kawasaki", 2, true);
// Usando métodos dos objetos
veiculo1.iniciarMotor();
veiculo1.informacoes();
veiculo2.iniciarMotor();
veiculo2.informacoes();
veiculo3.iniciarMotor();
veiculo3.informacoes();
veiculo4.iniciarMotor();
veiculo4.informacoes();
/*
### Tarefa

1. **Implemente a Classe `Vehicle`**
   - Defina a classe `Vehicle` conforme descrito.
   - Implemente o construtor para inicializar os atributos da classe.
   - Adicione os métodos `startEngine` e `displayInfo`.

2. **Instancie e Utilize Objetos**
   - Crie pelo menos dois objetos da classe `Vehicle` com diferentes valores para `type`, `wheels`, `engine` e `brand`.
   - Chame os métodos `startEngine` e `displayInfo` para cada objeto e observe as saídas.

### Dicas

- Lembre-se de seguir as convenções de nomenclatura para nomes de classes, métodos e variáveis.
- Teste o seu código para garantir que todos os métodos estão funcionando conforme o esperado.
- Utilize `console.log` para exibir as mensagens no console.

Boa sorte e divirta-se programando! Se precisar de ajuda, estarei aqui para ajudar.
*/
/*
Claro! Vamos criar um exercício baseado em um sistema de rede social. Este exercício envolve a criação de uma classe que representa um usuário de uma rede social, com métodos para adicionar amigos, postar atualizações de status, e exibir informações do perfil.

### Exercício: Sistema de Rede Social

#### Objetivo
Criar uma classe `User` que represente um usuário de uma rede social. Esta classe deve ter atributos e métodos para gerenciar amigos, postar atualizações de status, e exibir informações do perfil. Você também vai instanciar objetos dessa classe e utilizar seus métodos.

#### Passos

1. **Definir a Classe `User`**
   - Crie a classe `User` com os seguintes atributos:
     - `name` (nome do usuário)
     - `age` (idade do usuário)
     - `friends` (lista de amigos do usuário, inicialmente vazia)
     - `statusUpdates` (lista de atualizações de status, inicialmente vazia)

2. **Criar o Construtor**
   - O construtor da classe deve receber e inicializar os valores para `name` e `age`.

3. **Adicionar Métodos**
   - Adicione um método `addFriend` que recebe um objeto `User` e adiciona à lista de amigos.
   - Adicione um método `postStatus` que recebe uma string representando a atualização de status e adiciona à lista de atualizações de status.
   - Adicione um método `displayProfile` que imprime todas as informações do perfil, incluindo nome, idade, amigos e atualizações de status.

4. **Instanciar Objetos**
   - Crie pelo menos dois objetos da classe `User` com diferentes valores.
   - Utilize os métodos `addFriend`, `postStatus`, e `displayProfile` para cada objeto.

### Exemplo de Código

Aqui está um esqueleto do código que você deve completar:

```typescript
*/
console.log("Social Network System");
/* Estrutura de classe */
class Usuário {
    constructor(nomeParametro, idadeParametro) {
        this.nome = nomeParametro;
        this.idade = idadeParametro;
        this.amigos = [];
        this.atualizacaoStatus = [];
    }
    adicionarAmigo(amigo) {
        this.amigos.push(amigo);
        console.log(`${amigo.nome} foi adicionado como amigo.`);
    }
    postarStatus(status) {
        this.atualizacaoStatus.push(status);
        console.log(`Status postado: ${status}`);
    }
    informacoesPerfil() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log("Amigos:");
        this.amigos.forEach(amigo => {
            console.log(`- ${amigo.nome}`);
        });
        console.log("Atualizações de Status:");
        this.atualizacaoStatus.forEach((status, index) => {
            console.log(`${index + 1}. ${status}`);
        });
    }
}
// Criando objetos da classe User
const usuário1 = new Usuário("Pandora", 370);
const usuário2 = new Usuário("Nocturna", 160);
// Adicionando amigos e postando status
usuário1.adicionarAmigo(usuário2);
usuário1.postarStatus("Hoje é um ótimo dia!");
usuário2.postarStatus("Acabei de ler um livro interessante.");
// Exibindo perfis
usuário1.informacoesPerfil();
usuário2.informacoesPerfil();
/*
### Tarefa

1. **Implemente a Classe `User`**
   - Defina a classe `User` conforme descrito.
   - Implemente o construtor para inicializar os atributos da classe.
   - Adicione os métodos `addFriend`, `postStatus`, e `displayProfile`.

2. **Instancie e Utilize Objetos**
   - Crie pelo menos dois objetos da classe `User` com diferentes valores para `name` e `age`.
   - Utilize os métodos `addFriend`, `postStatus`, e `displayProfile` para interagir com os objetos e observar as saídas.

### Dicas

- Lembre-se de seguir as convenções de nomenclatura para nomes de classes, métodos e variáveis.
- Teste o seu código para garantir que todos os métodos estão funcionando conforme o esperado.
- Utilize `console.log` para exibir as mensagens no console.

Boa sorte e divirta-se programando! Se precisar de ajuda, estarei aqui para ajudar.
*/
/*
Claro! Vamos criar um exercício onde você gerencia uma lista de pessoas com algumas operações básicas.

### Descrição do Exercício:

Desenvolva um sistema de gerenciamento de uma lista de pessoas com as seguintes características:

1. **Classe Pessoa:**
   - A classe `Pessoa` deve ter os seguintes atributos:
     - `nome`: string (representando o nome da pessoa).
     - `idade`: number (representando a idade da pessoa).

2. **Classe ListaDePessoas:**
   - A classe `ListaDePessoas` deve ter os seguintes atributos:
     - `pessoas`: array de objetos Pessoa (representando a lista de pessoas).

   - A classe `ListaDePessoas` deve ter os seguintes métodos:
     - `adicionarPessoa(pessoa: Pessoa)`: Adiciona um objeto Pessoa à lista de pessoas.
     - `removerPessoa(nome: string)`: Remove um objeto Pessoa da lista com base no nome.
     - `listarPessoas()`: Lista todas as pessoas presentes na lista.
     - `encontrarPessoa(nome: string)`: Encontra e retorna uma pessoa com base no nome.

*/
console.log("Sistema de gerenciamento de Lista de Pessoas.");
/*
class Pessoa{
    nome:string;
    idade:number;

    constructor(nome:string, idade:number){
        this.nome=nome;
        this.idade=idade;
    }
}

class listaPessoas{
    pessoas:Pessoa[];

    constructor(){
        this.pessoas=[];
    }
    adicionarPessoa(pessoa:Pessoa){
        this.pessoas.push(pessoa);
        console.log(`${pessoa.nome} foi adicionada à lista.`);
    }
    removerPessoa(nome:string){
        const index=this.pessoas.findIndex(pessoa=>pessoa.nome===nome);
        if (index!==-1) {
            const removida=this.pessoas.splice(index,1)[0];
            console.log(`${removida.nome} foi removida da lista.`);
            
        } else {
            console.log(`Pessoa com nome ${nome} não encontrada.`);
        }
    }
    listarPessoas(){
        console.log("Lista de Pessoas:");
        this.pessoas.forEach(pessoa=>{
            console.log(`-${pessoa.nome},${pessoa.idade} anos`);
        });
    }
    encontrarPessoa(nome:string): Pessoa | undefined{
        return this.pessoas.find(pessoa=>pessoa.nome===nome);
    }
}

// Criando objetos da classe Pessoa
const pessoa1=new Pessoa("Pandora",370);
const pessoa2=new Pessoa("Nocturna", 180);
const pessoa3=new Pessoa("Afrodite", 15000);

// Criando objeto da classe ListaDePessoas
const lista =new listaPessoas();

// Adicionando pessoas à lista
lista.adicionarPessoa(pessoa1);
lista.adicionarPessoa(pessoa2);
lista.adicionarPessoa(pessoa3);

// Listando todas as pessoas
lista.listarPessoas();

// Encontrando uma pessoa pelo nome
const encontrada = lista.encontrarPessoa("Pandora");
if (encontrada) {
    console.log(`Pessoa encontrada: ${encontrada.nome}, ${encontrada.idade} anos.`);
    
} else {
    console.log("Pessoa não encontrada.");
}

// Removendo uma pessoa da lista
lista.removerPessoa("Afrodite");

// Listando todas as pessoas após remoção
lista.listarPessoas();


/*

### Tarefa:

1. **Implemente a Classe `Pessoa`:**
   - Defina a classe `Pessoa` conforme descrito.
   - Implemente o construtor para inicializar os atributos `nome` e `idade`.

2. **Implemente a Classe `ListaDePessoas`:**
   - Defina a classe `ListaDePessoas` conforme descrito.
   - Implemente o construtor para inicializar o atributo `pessoas` como um array vazio.
   - Adicione os métodos `adicionarPessoa`, `removerPessoa`, `listarPessoas`, e `encontrarPessoa`.

3. **Teste o Sistema de Gerenciamento de Lista de Pessoas:**
   - Crie pelo menos três objetos da classe `Pessoa` com diferentes valores para `nome` e `idade`.
   - Utilize os métodos da classe `ListaDePessoas` para adicionar, listar, encontrar e remover pessoas.
   - Verifique se as operações estão sendo realizadas corretamente e as saídas estão conforme o esperado.

### Dicas:

- Utilize `console.log` para exibir as mensagens no console e verificar se o seu código está funcionando corretamente.
- Verifique se os métodos estão manipulando corretamente a lista de pessoas.
- Teste diferentes casos de uso para garantir que o seu código está completo e funcional.

Espero que este exercício seja útil! Se precisar de mais alguma coisa, estou aqui para ajudar.
*/
/*
Claro! Vamos criar um exercício baseado em um sistema de biblioteca. Este sistema gerencia livros e membros da biblioteca, permitindo operações como adicionar livros, emprestar livros a membros e listar os livros disponíveis e emprestados.

### Descrição do Exercício:

Desenvolva um sistema de gerenciamento de biblioteca com as seguintes características:

1. **Classe Livro:**
   - A classe `Livro` deve ter os seguintes atributos:
     - `titulo`: string (representando o título do livro).
     - `autor`: string (representando o autor do livro).
     - `emprestado`: boolean (indicando se o livro está emprestado).

2. **Classe Membro:**
   - A classe `Membro` deve ter os seguintes atributos:
     - `nome`: string (representando o nome do membro).
     - `livrosEmprestados`: array de objetos `Livro` (representando os livros emprestados pelo membro).

3. **Classe Biblioteca:**
   - A classe `Biblioteca` deve ter os seguintes atributos:
     - `livros`: array de objetos `Livro` (representando a coleção de livros da biblioteca).
     - `membros`: array de objetos `Membro` (representando os membros da biblioteca).

   - A classe `Biblioteca` deve ter os seguintes métodos:
     - `adicionarLivro(livro: Livro)`: Adiciona um objeto `Livro` à biblioteca.
     - `adicionarMembro(membro: Membro)`: Adiciona um objeto `Membro` à biblioteca.
     - `emprestarLivro(titulo: string, nomeMembro: string)`: Empresta um livro a um membro.
     - `listarLivrosDisponiveis()`: Lista todos os livros disponíveis na biblioteca.
     - `listarLivrosEmprestados()`: Lista todos os livros que estão emprestados.
*/
console.log("Sistema de Gerenciamento de Biblioteca");
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
}
class Membro {
    constructor(nome) {
        this.nome = nome;
        this.livrosEmprestados = [];
    }
    emprestarLivro(livro) {
        if (!livro.emprestado) {
            livro.emprestado = true;
            this.livrosEmprestados.push(livro);
            console.log(`${livro.titulo} foi emprestado a ${this.nome}.`);
        }
        else {
            console.log(`${livro.titulo} já está emprestado.`);
        }
    }
    devolverLivro(titulo) {
        const index = this.livrosEmprestados.findIndex(livro => livro.titulo === titulo);
        if (index !== -1) {
            const livro = this.livrosEmprestados.splice(index, 1)[0];
            livro.emprestado = false;
            console.log(`${livro.titulo} foi devolvido por ${this.nome}.`);
        }
        else {
            console.log(`${this.nome} não possui o livro ${titulo}.`);
        }
    }
}
class Biblioteca {
    constructor() {
        this.livros = [];
        this.membros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }
    adicionarMembro(membro) {
        this.membros.push(membro);
        console.log(`Membro "${membro.nome}" adicionado à biblioteca.`);
    }
    emprestarLivro(titulo, nomeMembro) {
        const livro = this.livros.find(livro => livro.titulo === titulo);
        const membro = this.membros.find(membro => membro.nome === nomeMembro);
        if (livro && membro) {
            membro.emprestarLivro(livro);
        }
        else {
            console.log(`Livro ou Membro não encontrado.`);
        }
    }
    listarLivrosDisponiveis() {
        console.log("Livros Disponíveis:");
        this.livros.forEach(livro => {
            if (!livro.emprestado) {
                console.log(`- ${livro.titulo} por ${livro.autor}`);
            }
        });
    }
    listarLivrosEmprestados() {
        console.log("Livros Emprestados:");
        this.livros.forEach(livro => {
            if (livro.emprestado) {
                console.log(`- ${livro.titulo} por ${livro.autor}`);
            }
        });
    }
}
// Criando objetos da classe Livro
const livro1 = new Livro("1984", "George Orwell");
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
const livro3 = new Livro("Herdeiro da Mana", "Gabriel Capiotti");
const livro4 = new Livro("Contos de Luna e Nocturna", "Pandora e Nocturna");
// Criando objetos da classe Membro
const membro1 = new Membro("Arian");
const membro2 = new Membro("Lilith");
// Criando objeto da classe Biblioteca
const biblioteca = new Biblioteca();
// Adicionando livros à biblioteca
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);
// Adicionando membros à biblioteca
biblioteca.adicionarMembro(membro1);
biblioteca.adicionarMembro(membro2);
// Emprestando livros a membros
biblioteca.emprestarLivro("1984", "Arian");
biblioteca.emprestarLivro("Contos de Luna e Nocturna", "Lilith");
// Listando todos os livros disponíveis
biblioteca.listarLivrosDisponiveis();
// Membro devolvendo um livro
membro1.devolverLivro("1984");
// Listando todos os livros disponíveis após a devolução
biblioteca.listarLivrosDisponiveis();
// Listando todos os livros emprestados após a devolução
biblioteca.listarLivrosEmprestados();
/*
### Tarefa:

1. **Implemente a Classe `Livro`:**
   - Defina a classe `Livro` conforme descrito.
   - Implemente o construtor para inicializar os atributos `titulo`, `autor` e `emprestado`.

2. **Implemente a Classe `Membro`:**
   - Defina a classe `Membro` conforme descrito.
   - Implemente o construtor para inicializar os atributos `nome` e `livrosEmprestados`.
   - Adicione os métodos `emprestarLivro` e `devolverLivro`.

3. **Implemente a Classe `Biblioteca`:**
   - Defina a classe `Biblioteca` conforme descrito.
   - Implemente o construtor para inicializar os atributos `livros` e `membros`.
   - Adicione os métodos `adicionarLivro`, `adicionarMembro`, `emprestarLivro`, `listarLivrosDisponiveis` e `listarLivrosEmprestados`.

4. **Teste o Sistema de Biblioteca:**
   - Crie pelo menos três objetos da classe `Livro` com diferentes valores para `titulo` e `autor`.
   - Crie pelo menos dois objetos da classe `Membro` com diferentes valores para `nome`.
   - Utilize os métodos da classe `Biblioteca` para adicionar livros e membros, emprestar livros, listar livros disponíveis e emprestados.
   - Teste a devolução de livros por parte dos membros e verifique se as operações estão sendo realizadas corretamente.

### Dicas:

- Utilize `console.log` para exibir as mensagens no console e verificar se o seu código está funcionando corretamente.
- Verifique se os métodos estão manipulando corretamente os atributos e estados dos objetos.
- Teste diferentes casos de uso para garantir que o seu código está completo e funcional.

Boa sorte com o exercício! Se precisar de mais alguma ajuda, estou à disposição.
*/
/*
Claro! Aqui está um exercício relacionado a um sistema de gerenciamento de uma galeria de arte. Este exemplo envolve obras de arte, artistas e a galeria.

### Exercício: Sistema de Gerenciamento de Galeria de Arte

1. **Classe ObraDeArte:** Representa uma obra de arte na galeria.
2. **Classe Artista:** Representa um artista que criou uma ou mais obras de arte.
3. **Classe Galeria:** Representa a galeria que gerencia obras de arte e artistas.

### Código:
*/
class ObraArte {
    constructor(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
        this.artista = null;
    }
}
class Artista {
    constructor(nome) {
        this.nome = nome;
        this.obras = [];
    }
    adicionarObra(obra) {
        this.obras.push(obra);
        obra.artista = this;
        console.log(`Obra "${obra.titulo}" adicionada ao artista ${this.nome}.`);
    }
}
class Galeria {
    constructor() {
        this.obras = [];
        this.artistas = [];
    }
    adicionarObra(obra) {
        this.obras.push(obra);
        console.log(`Obra "${obra.titulo}" adicionada à galeria.`);
    }
    adicionarArtista(artista) {
        this.artistas.push(artista);
        console.log(`Artista "${artista.nome}" adicionado à galeria.`);
    }
    listarObras() {
        console.log("Obras na Galeria:");
        this.obras.forEach(obra => {
            console.log(`- ${obra.titulo} (${obra.ano}) por ${obra.artista ? obra.artista.nome : "Artista Desconhecido"}`);
        });
    }
    listarArtistas() {
        console.log("Artistas na Galeria:");
        this.artistas.forEach(artista => {
            console.log(`- ${artista.nome}`);
        });
    }
    listarObrasPorArtista(nomeArtista) {
        const artista = this.artistas.find(artista => artista.nome === nomeArtista);
        if (artista) {
            console.log(`Obras de ${artista.nome}:`);
            artista.obras.forEach(obra => {
                console.log(`- ${obra.titulo} (${obra.ano})`);
            });
        }
        else {
            console.log(`Artista "${nomeArtista}" não encontrado.`);
        }
    }
}
// Criando objetos da classe ObraArte
const obra1 = new ObraArte("Mona Lisa", 1503);
const obra2 = new ObraArte("A Noite Estrelada", 1889);
const obra3 = new ObraArte("O Grito", 1893);
// Criando objetos da classe Artista
const artista1 = new Artista("Leonardo da Vinci");
const artista2 = new Artista("Vincent van Gogh");
const artista3 = new Artista("Edvard Munch");
// Criando objeto da classe Galeria
const galeria = new Galeria();
// Adicionando obras à galeria
galeria.adicionarObra(obra1);
galeria.adicionarObra(obra2);
galeria.adicionarObra(obra3);
// Adicionando artistas à galeria
galeria.adicionarArtista(artista1);
galeria.adicionarArtista(artista2);
galeria.adicionarArtista(artista3);
// Associando obras aos artistas
artista1.adicionarObra(obra1);
artista2.adicionarObra(obra2);
artista3.adicionarObra(obra3);
// Listando todas as obras na galeria
galeria.listarObras();
// Listando todos os artistas na galeria
galeria.listarArtistas();
// Listando obras por um artista específico
galeria.listarObrasPorArtista("Vincent van Gogh");
/*
### Instruções:

1. **Classe ObraDeArte:**
   - Propriedades: `titulo` (string), `ano` (number), `artista` (Artista | null).
   - Construtor para inicializar `titulo` e `ano`, e definir `artista` como `null`.

2. **Classe Artista:**
   - Propriedades: `nome` (string), `obras` (array de ObraDeArte).
   - Construtor para inicializar `nome` e definir `obras` como um array vazio.
   - Método `adicionarObra` para adicionar uma obra à lista de obras do artista e associar a obra ao artista.

3. **Classe Galeria:**
   - Propriedades: `obras` (array de ObraDeArte), `artistas` (array de Artista).
   - Construtor para inicializar `obras` e `artistas` como arrays vazios.
   - Métodos para adicionar obras e artistas à galeria, listar todas as obras, listar todos os artistas e listar obras por artista específico.

### Tarefas:

1. Crie objetos da classe `ObraDeArte`.
2. Crie objetos da classe `Artista`.
3. Crie um objeto da classe `Galeria`.
4. Adicione obras e artistas à galeria.
5. Associe obras aos artistas.
6. Liste todas as obras e artistas na galeria.
7. Liste obras de um artista específico.

Esta estrutura ajuda a entender a relação entre classes e objetos, a associação de objetos e a manipulação de arrays em TypeScript.
*/
class Pessoa {
    constructor(documento, nome, idade, sexo) {
        this.documento = documento;
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    buscarDocumento() {
        return this.documento;
    }
    buscarNome() {
        return this.nome;
    }
    buscarDados() {
        return {
            nome: this.nome,
            documento: this.documento,
            idade: this.idade,
            sexo: this.sexo
        };
    }
}
class Cidade {
    constructor(nome, sigla, emergencia) {
        this.nome = nome;
        this.sigla = sigla;
        this.emergencia = 0;
    }
    buscarDados() {
        return {
            nome: this.nome,
            sigla: this.sigla,
            emergencia: this.emergencia
        };
    }
    atualizarEmergencia(valor) {
        this.emergencia = valor;
    }
}
class Critério {
    constructor(descricao, nivel) {
        this.descricao = descricao;
        this.nivel = nivel;
    }
    buscarDados() {
        return { descricao: this.descricao, nivel: this.nivel };
    }
}
const novoHamburgo = new Item('Novo Hamburgo', 'NH');
const pessoa1 = new Pessoa("89725987459", "Pedro", 45, "M");
const pessoa2 = new Pessoa("34875348755", "Amanda", 32, "F");
const pessoa3 = new Pessoa("97490593223", "Gustavo", 30, "M");
const pessoa4 = new Pessoa("12334358496", "Leonora", 27, "F");
const pessoa5 = new Pessoa("53443435496", "Rafael", 18, "M");
const pessoa6 = new Pessoa("12989243244", "Gabriela", 23, "F");
const c1 = new Critério('Sem água potável', 4);
const c2 = new Critério('Nível do rio', 2);
const c3 = new Critério('Sem energia', 3);
novoHamburgo.adicionarPessoa([pessoa1, pessoa2, pessoa3]);
novoHamburgo.adicionarPessoa([pessoa4, pessoa5]);
novoHamburgo.adicionarPessoa([pessoa6]);
novoHamburgo.adicionarCriterio([c1, c2, c3]);
novoHamburgo.adicionarPessoa((pessoa6));
console.log(novoHamburgo.buscarDados());
/*
Exercício:
Crie um arquivo TypeScript chamado calculadora.ts.

Implemente uma classe Calculadora que tenha métodos para realizar operações de soma, subtração, multiplicação e divisão.

Compile o arquivo TypeScript e teste as funcionalidades da sua calculadora.
*/
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
// Exemplo de uso:
const minhaConta = new ContaBancaria("Pandora", 1234);
// Consultar saldo inicial
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$0.00
// Realizar um depósito
minhaConta.depositar(500); // Saída: Depósito de R$500.00 realizado com sucesso.
// Consultar saldo após depósito
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$500.00
// Realizar um saque
minhaConta.sacar(20); // Saída: Saque de R$200.00 realizado com sucesso.
// Consultar saldo após saque
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$300.00
// Tentar realizar um saque com saldo insuficiente
minhaConta.sacar(400); // Saída: Saldo insuficiente para saque.
// Consultar saldo após tentativa de saque com saldo insuficiente
console.log(minhaConta.consultarSaldo()); // Saída: Saldo atual: R$300.00
