/*
5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.
*/

class BombaCombustivel {
    // Declaração das propriedades da classe
    tipoCombustivel: string;
    valorLitro: number;
    qtdCombustivel: number;

    // Construtor da classe, responsável por inicializar os valores das propriedades
    constructor(
        tipoCombustivel: string,
        valorLitro: number,
        qtdCombustivel: number
    ) {
        // Inicializa as propriedades com os valores fornecidos no momento da criação da instância
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.qtdCombustivel = qtdCombustivel;
    }

    // Método para abastecer um determinado valor em reais
    abastecerValor(valorAbastecido: number) {
        // Verifica se há combustível suficiente para abastecer o valor desejado
        if (this.qtdCombustivel < valorAbastecido / this.valorLitro) {
            // Se não houver combustível suficiente, exibe mensagem informando a quantidade disponível
            console.log(`Quantidade de combustível disponível: ${this.qtdCombustivel} Litros`);
        } else {
            // Caso contrário, calcula e exibe a quantidade de litros abastecidos e atualiza o estoque
            console.log(`Total de litros abastecido: ${valorAbastecido / this.valorLitro}`);
            this.qtdCombustivel -= valorAbastecido / this.valorLitro;
        }
    }

    // Método para abastecer uma determinada quantidade de litros
    abastecerLitro(litrosAbastecido: number) {
        // Verifica se há combustível suficiente para abastecer a quantidade desejada
        if (this.qtdCombustivel < litrosAbastecido) {
            // Se não houver combustível suficiente, exibe mensagem informando a quantidade disponível
            console.log("Não há combustível suficiente na bomba!");
            console.log(`Quantidade de combustível disponível: ${this.qtdCombustivel} Litros`);
        } else {
            // Caso contrário, calcula e exibe o valor a ser pago e atualiza o estoque
            console.log(`Total a ser pago: R$ ${litrosAbastecido * this.valorLitro}`);
            this.qtdCombustivel -= litrosAbastecido;
        }
    }

    // Método para alterar o valor do litro de combustível
    alterarValor(novoValor: number) {
        // Atualiza o valor do litro com o novo valor fornecido
        this.valorLitro = novoValor;
    }

    // Método para alterar o tipo de combustível
    alterarCombustivel(novoCombustivel: string) {
        // Atualiza o tipo de combustível com o novo valor fornecido
        this.tipoCombustivel = novoCombustivel;
    }

    // Método para alterar a quantidade de combustível disponível na bomba
    alterarQtdCombustivel(novaQtdCombustivel: number) {
        // Atualiza a quantidade de combustível com o novo valor fornecido
        this.qtdCombustivel = novaQtdCombustivel;
    }
}
export default BombaCombustivel;

/*
Entendi! Vamos criar um exercício similar, mas envolvendo um sistema de guinchos e frota:

1. **Classe Guincho:**
    - Atributos:
        - Tipo de guincho (por exemplo: plataforma, guincho simples, etc.).
        - Valor por quilômetro rodado.
        - Quantidade disponível de guinchos.
    - Métodos:
        - `guincharPorDistancia(distancia: number)`: Recebe a distância em quilômetros a ser guinchada e calcula o valor a ser cobrado, além de atualizar a quantidade disponível de guinchos.
        - `alterarValor(valorNovo: number)`: Permite alterar o valor por quilômetro rodado.
        - `alterarTipoGuincho(tipoNovo: string)`: Permite alterar o tipo de guincho.
        - `alterarQuantidadeDisponivel(novaQuantidade: number)`: Permite alterar a quantidade disponível de guinchos.

2. **Classe Frota:**
    - Atributos:
        - Tipo de veículo (por exemplo: carro, caminhão, moto, etc.).
        - Capacidade de carga (em toneladas).
        - Quantidade disponível de veículos.
    - Métodos:
        - `transportarCarga(carga: number)`: Recebe a carga em toneladas a ser transportada e verifica se há veículos disponíveis para transportar essa carga, calculando o custo do transporte e atualizando a quantidade disponível de veículos.
        - `alterarCapacidade(capacidadeNova: number)`: Permite alterar a capacidade de carga dos veículos.
        - `alterarTipoVeiculo(tipoNovo: string)`: Permite alterar o tipo de veículo.
        - `alterarQuantidadeDisponivel(novaQuantidade: number)`: Permite alterar a quantidade disponível de veículos.

3. **Programa Principal:**
    - Crie instâncias das classes Guincho e Frota.
    - Realize chamadas aos métodos para simular o uso dos guinchos e veículos.

Assim, o exercício proposto envolve a criação das duas classes e a implementação dos métodos especificados, seguido de sua utilização no programa principal para simular o funcionamento do sistema de guinchos e frota.
*/
  
class Guincho {
    tipoGuincho: string;
    valorKmRodado: number;
    qtdDisponível: number;

    constructor(
        tipoGuincho: string,
        valorKmRodado: number,
        qtdDisponível: number
    ) {
        this.tipoGuincho = tipoGuincho;
        this.valorKmRodado = valorKmRodado;
        this.qtdDisponível = qtdDisponível;
    }

    guincharDistancia(distancia: number) {
        if (this.qtdDisponível < distancia) {
            console.log("Não há guincho disponível para essa distância!");
            console.log(`Distância máxima disponível: ${this.qtdDisponível} km`);
        } else {
            console.log(`Valor a pagar: R$ ${distancia * this.valorKmRodado}`);
            this.qtdDisponível -= distancia;
        }
    }

    alterarValor(valorNovo: number) {
        this.valorKmRodado = valorNovo;
    }

    alterarGuincho(tipoNovo: string) {
        this.tipoGuincho = tipoNovo;
    }

    alterarQtdDisponivel(novaQtd: number) {
        this.qtdDisponível = novaQtd;
    }
}

class TransportadoraCarga {
    tipoVeiculo: string;
    valorKmRodado: number;
    capacidadeCarga: number;
    qtdDisponível: number;

    constructor(
        tipoVeiculo: string,
        valorKmRodado: number,
        capacidadeCarga: number,
        qtdDisponível: number
    ) {
        this.tipoVeiculo = tipoVeiculo;
        this.valorKmRodado = valorKmRodado;
        this.capacidadeCarga = capacidadeCarga;
        this.qtdDisponível = qtdDisponível;
    }

    transportarCarga(distancia: number, carga: number) {
        if (this.qtdDisponível < distancia) {
            console.log("Não há veículo disponível para essa distância!");
            console.log(`Distância máxima disponível: ${this.qtdDisponível} km`);
        } else {
            const valorTotal = distancia * this.valorKmRodado;
            if (carga > this.capacidadeCarga) {
                console.log("A carga excede a capacidade do veículo!");
            } else {
                console.log(`Valor a pagar: R$ ${valorTotal}`);
                this.qtdDisponível -= distancia;
            }
        }
    }

    alterarValor(valorNovo: number) {
        this.valorKmRodado = valorNovo;
    }

    alterarVeiculo(tipoNovo: string) {
        this.tipoVeiculo = tipoNovo;
    }

    alterarCapacidadeCarga(novaCapacidade: number) {
        this.capacidadeCarga = novaCapacidade;
    }

    alterarQtdDisponivel(novaQtd: number) {
        this.qtdDisponível = novaQtd;
    }
}

// Exemplo de uso do Guincho
const guincho1 = new Guincho("Plataforma", 100, 500);
guincho1.guincharDistancia(200);
guincho1.guincharDistancia(600);

// Exemplo de uso da TransportadoraCarga
const transporte1 = new TransportadoraCarga("Caminhão", 50, 5000, 1000);
transporte1.transportarCarga(300, 4000);
transporte1.transportarCarga(2000, 6000);

/*
Entendi! Aqui está o exercício:

1. Crie uma classe chamada `Veiculo` com os seguintes atributos:
   - `modelo` (string): representa o modelo do veículo.
   - `ano` (number): representa o ano de fabricação do veículo.
   - `valorDiaria` (number): valor da diária de aluguel do veículo.
   - `disponibilidade` (boolean): indica se o veículo está disponível para aluguel.

2. Implemente o construtor da classe `Veiculo` para inicializar os atributos.

3. Adicione os seguintes métodos à classe `Veiculo`:
   - `alugarVeiculo(dias: number): number`: recebe o número de dias de aluguel como parâmetro e retorna o valor total do aluguel. Se o veículo estiver disponível, atualize sua disponibilidade para `false`, caso contrário, exiba uma mensagem informando que o veículo não está disponível e retorne 0.
   - `devolverVeiculo(): void`: atualiza a disponibilidade do veículo para `true`.

4. Crie alguns objetos da classe `Veiculo` com diferentes modelos, anos e valores de diária, alguns deles disponíveis para aluguel e outros não.

5. Teste os métodos criados, alugando e devolvendo os veículos e verificando se as operações ocorrem conforme o esperado.
*/

class Veiculo {
    modelo: string;
    ano: number;
    valorDiaria: number;
    disponibilidade: boolean;
    
    constructor(
        modelo: string,
        ano: number,
        valorDiaria: number,
        disponibilidade: boolean,
    ) 
    {
       this.modelo = modelo;
       this.ano = ano;
       this.valorDiaria = valorDiaria;
       this.disponibilidade = disponibilidade;
    }
    alugarVeiculo(dias:number){
        if (!this.disponibilidade) {
            console.log("Veículo não disponível para alocação!");
            return 0;
        }
        const valorTotal=dias*this.valorDiaria;
        console.log(`Veículo alugado por ${dias}. Valor Total: R$ ${valorTotal}`);
        this.disponibilidade=true;
        return valorTotal;
    }
    devolverVeiculo(): void{
        this.disponibilidade=true;
        console.log("Veículo devolvido com sucesso.");
        
    }
}

// Exemplo de uso
const carro1 = new Veiculo("Honda Civic", 2022, 150, true);
const carro2 = new Veiculo("Toyota Corolla", 2021, 180, false);

console.log("Aluguel do Carro 1:");
const valorAluguelCarro1 = carro1.alugarVeiculo(5);

console.log("Aluguel do Carro 2:");
const valorAluguelCarro2 = carro2.alugarVeiculo(3);

console.log("Devolução do Carro 1:");
carro1.devolverVeiculo();

console.log("Tentativa de alugar o Carro 2 novamente:");
const novoValorAluguelCarro2 = carro2.alugarVeiculo(2);


/*
Claro, aqui está o enunciado baseado na classe `Encomenda`:

---

### Sistema de Controle de Envio de Encomendas

Você foi contratado para desenvolver um sistema de controle de envio de encomendas para uma empresa de logística. A empresa precisa de um sistema que seja capaz de registrar as informações básicas de uma encomenda e controlar seu status durante o processo de entrega.

1. **Classe Encomenda:**
   - A classe `Encomenda` representa uma única encomenda a ser entregue.
   - Atributos:
     - `remetente`: Nome do remetente da encomenda.
     - `destinatario`: Nome do destinatário da encomenda.
     - `peso`: Peso da encomenda em quilogramas (kg).
     - `enderecoEntrega`: Endereço de entrega da encomenda.
     - `status`: Status atual da encomenda (inicializado como "Pendente").
   - Métodos:
     - `atualizarStatus(novoStatus: string)`: Atualiza o status da encomenda para o valor especificado.
     - `calcularCustoEnvio(): number`: Calcula o custo do envio da encomenda com base no peso. O custo é fixado em R$ 0,50 por quilo.

2. **Exemplo de Uso:**
   ```typescript
   const encomenda1 = new Encomenda("João", "Maria", 5, "Rua A, 123");
   console.log("Custo do envio:", encomenda1.calcularCustoEnvio());
   console.log("Status da encomenda:", encomenda1.status);
   encomenda1.atualizarStatus("Em trânsito");
   console.log("Novo status da encomenda:", encomenda1.status);
   ```

Utilize a classe `Encomenda` como base para desenvolver o sistema de controle de envio de encomendas. Certifique-se de que os métodos e atributos estão funcionando corretamente e que as encomendas podem ser registradas e rastreadas com sucesso.

--- 

Esse enunciado descreve o sistema de controle de envio de encomendas utilizando a classe `Encomenda`. Agora você pode implementar outras funcionalidades ou expandir o sistema conforme necessário.
*/

class Encomenda1{
    remetente:string;
    destinatario:string;
    peso:number;
    endereçoEntrega:string;
    status:string;

    constructor(
        remetente: string,
        destinatario:string,
        peso:number,
        enderecoEntrega:string,
    )
    {
        this.remetente=remetente;
        this.destinatario=destinatario;
        this.peso=peso;
        this.endereçoEntrega=enderecoEntrega;
        this.status="Pendente"
    }
    // Método para atualizar o status da encomenda
    atualizarStatus(novoStatus:string){
        this.status=novoStatus;
    }
    // Método para calcular o custo do envio com base no peso da encomenda
    calcularCustoEnvio():number{
    // Suponha que o custo seja R$ 0,50 por quilo
        const custoQuilo=0.5;
        return this.peso*custoQuilo;
    }
}

// Exemplo de uso da classe Encomenda
const encomenda1 = new Encomenda1("João", "Maria", 5, "Rua A, 123");
console.log("Custo do envio:", encomenda1.calcularCustoEnvio());
console.log("Status da encomenda:", encomenda1.status);
encomenda1.atualizarStatus("Em trânsito");
console.log("Novo status da encomenda:", encomenda1.status);

/*
Enunciado da Questão:

Você foi contratado para desenvolver um sistema de gerenciamento de produtos para uma empresa que vende eletrônicos e realiza entregas dos produtos aos clientes. A empresa precisa de um sistema que permita registrar os produtos em estoque, atualizar o estoque conforme as vendas e calcular o custo de envio dos produtos.

1. **Classe Produto:**
   - A classe `Produto` representa um produto disponível na loja.
   - Atributos:
     - `nome`: Nome do produto.
     - `precoUnitario`: Preço unitário do produto.
     - `quantidadeEstoque`: Quantidade disponível em estoque.
     - `categoria`: Categoria do produto (ex: smartphones, laptops, tablets, acessórios).
   - Métodos:
     - `atualizarEstoque(quantidade: number)`: Atualiza a quantidade em estoque do produto.
     - `calcularTotal(): number`: Calcula o total de vendas do produto com base na quantidade em estoque e no preço unitário.

2. **Classe Encomenda:**
   - A classe `Encomenda` representa um pedido de entrega de um produto.
   - Atributos:
     - `remetente`: Nome do remetente.
     - `destinatario`: Nome do destinatário.
     - `peso`: Peso da encomenda em quilogramas.
     - `enderecoEntrega`: Endereço de entrega da encomenda.
     - `status`: Status da entrega (ex: Pendente, Em trânsito, Entregue).
   - Métodos:
     - `atualizarStatus(novoStatus: string)`: Atualiza o status da entrega.
     - `calcularCustoEnvio(): number`: Calcula o custo de envio da encomenda com base no peso.

3. **Exemplo de Uso:**
   ```typescript
   // Criando um produto e uma encomenda
   const produto1 = new Produto("Smartphone", 1500, 50, "Smartphones");
   const encomenda1 = new Encomenda("João", "Maria", 2, "Rua A, 123");

   // Atualizando o estoque do produto
   produto1.atualizarEstoque(-5); // Vende 5 unidades do produto

   // Atualizando o status da encomenda e calculando o custo de envio
   encomenda1.atualizarStatus("Em trânsito");
   console.log("Custo de envio da encomenda:", encomenda1.calcularCustoEnvio());
   ```

Desenvolva as classes `Produto` e `Encomenda` conforme descrito acima e utilize-as para gerenciar os produtos em estoque e as entregas dos produtos. Utilize o exemplo de uso para testar o sistema de gerenciamento.
*/

class Produto{
    nome:string;
    precoUnitario:number;
    quantidadeEstoque:number;
    categoria:string;
    constructor(
        nome:string,
        precoUnitario:number,
        quantidadeEstoque:number,
        categoria:string
    )
    {
        this.nome=nome;
        this.precoUnitario=precoUnitario;
        this.quantidadeEstoque=quantidadeEstoque;
        this.categoria=categoria;
    }
    atualizarEstoque(quantidade:number){
        this.quantidadeEstoque+=quantidade;
    }
    calcularTotal():number{
        return this.quantidadeEstoque*this.precoUnitario;
    }
    
}

class Encomenda {
    remetente:string;
    destinatario:string;
    peso:number;
    enderecoEntrega:string;
    status:string;
    constructor(
        remetente:string,
        destinatario:string,
        peso:number,
        enderecoEntrega:string,
    ) 
    {
       this.remetente=remetente;
       this.destinatario=destinatario;
       this.peso=peso;
       this.enderecoEntrega=enderecoEntrega;
       this.status="Pendente";
    }
    atualizarStatus(novoStatus:string){
        this.status=novoStatus;
    }
    calcularCustoEnvio():number{
        const custoQuilo=0.5;
        return this.peso*custoQuilo;
    }
}

const produto1 = new Produto("Smartphone", 1500, 50, "Smartphones");
const encomenda = new Encomenda("João", "Maria", 2, "Rua A, 123");

// Atualizando o estoque do produto
produto1.atualizarEstoque(-5); // Vende 5 unidades do produto

// Atualizando o status da encomenda e calculando o custo de envio
encomenda1.atualizarStatus("Em trânsito");
console.log("Custo de envio da encomenda:", encomenda1.calcularCustoEnvio());

/*

// Exemplo de uso das classes
const produto1 = new Produto("Smartphone", 1500, 50, "Smartphones");
const encomenda1 = new Encomenda("João", "Maria", 2, "Rua A, 123");

// Atualizando o estoque do produto
produto1.atualizarEstoque(-5); // Vende 5 unidades do produto

// Atualizando o status da encomenda e calculando o custo de envio
encomenda1.atualizarStatus("Em trânsito");
console.log("Custo de envio da encomenda:", encomenda1.calcularCustoEnvio());
*/





/*
### Enunciado do Exercício:

Você foi contratado para desenvolver um sistema de criação de contas e interação com publicações em uma rede social. O sistema deve permitir que os usuários criem contas, façam login, publiquem conteúdo e interajam com as publicações de outros usuários por meio de likes, dislikes e comentários.

1. **Classe Conta:**
   - A classe `Conta` representa uma conta de usuário na rede social.
   - Atributos:
     - `username`: Nome de usuário único.
     - `email`: Endereço de e-mail associado à conta.
     - `senha`: Senha para login na conta.
   - Métodos:
     - `criarConta(username: string, email: string, senha: string)`: Método estático para criar uma nova conta de usuário.
     - `login(email: string, senha: string): boolean`: Método para realizar login na conta.

2. **Classe Publicacao:**
   - A classe `Publicacao` representa uma publicação na rede social.
   - Atributos:
     - `autor`: Nome de usuário do autor da publicação.
     - `conteudo`: Conteúdo da publicação.
     - `likes`: Número de likes na publicação.
     - `dislikes`: Número de dislikes na publicação.
     - `comentarios`: Array de strings contendo os comentários na publicação.
   - Métodos:
     - `darLike()`: Incrementa o número de likes na publicação.
     - `darDislike()`: Incrementa o número de dislikes na publicação.
     - `adicionarComentario(comentario: string)`: Adiciona um comentário à publicação.

3. **Exemplo de Uso:**
   ```typescript
   // Criando uma conta e realizando login
   Conta.criarConta("usuario123", "usuario123@example.com", "senha123");
   const loginSucesso = Conta.login("usuario123@example.com", "senha123");
   if (loginSucesso) {
       console.log("Login realizado com sucesso!");
   } else {
       console.log("Falha no login. Verifique suas credenciais.");
   }

   // Criando uma publicação e interagindo com ela
   const publicacao1 = new Publicacao("usuario123", "Hoje é um ótimo dia!");
   publicacao1.darLike();
   publicacao1.adicionarComentario("Que bela foto!");
   ```

Desenvolva as classes `Conta` e `Publicacao` conforme descrito acima e utilize-as para criar contas de usuário, realizar login, criar publicações e interagir com elas através de likes, dislikes e comentários. Utilize o exemplo de uso para testar o sistema de interação.
*/

// Definição da classe Conta
class Conta {
    // Array estático para armazenar todas as contas criadas
    static contas: Conta[] = [];
    // Atributos da classe Conta
    username: string;
    email: string;
    senha: string;

    // Construtor da classe Conta
    constructor(username: string, email: string, senha: string) {
        // Inicializa os atributos da conta com os valores fornecidos
        this.username = username;
        this.email = email;
        this.senha = senha;
    }

    // Método estático para criar uma nova conta
    static criarConta(username: string, email: string, senha: string): void {
        // Cria uma nova instância da classe Conta com os dados fornecidos
        const novaConta = new Conta(username, email, senha);
        // Adiciona a nova conta ao array de contas
        this.contas.push(novaConta);
        // Exibe uma mensagem indicando que a conta foi criada com sucesso
        console.log(`Conta criada para o usuário ${username}`);
    }

    // Método estático para realizar o login
    static login(email: string, senha: string): boolean {
        // Procura por uma conta com o email e senha fornecidos
        const conta = this.contas.find(conta => conta.email === email && conta.senha === senha);
        // Se a conta for encontrada, exibe uma mensagem de sucesso e retorna true
        if (conta) {
            console.log(`Login realizado com sucesso para usuário ${conta.username}`);
            return true;
        } else {
            // Se a conta não for encontrada, exibe uma mensagem de falha e retorna false
            console.log("Falha no login! Verifique suas credenciais.");
            return false;
        }
    }
}

// Definição da classe Publicacao
class Publicacao {
    // Atributos da classe Publicacao
    autor: string;
    conteudo: string;
    likes: number = 0;
    deslikes: number = 0;
    comentarios: string[] = [];

    // Construtor da classe Publicacao
    constructor(autor: string, conteudo: string) {
        // Inicializa os atributos da publicação com os valores fornecidos
        this.autor = autor;
        this.conteudo = conteudo;
    }

    // Método para dar like em uma publicação
    darLike(): void {
        // Incrementa o contador de likes e exibe uma mensagem indicando o total de likes
        this.likes++;
        console.log(`Publicação recebeu um like. Total de Likes: ${this.likes}`);
    }

    // Método para dar deslike em uma publicação
    darDeslike(): void {
        // Incrementa o contador de deslikes e exibe uma mensagem indicando o total de deslikes
        this.deslikes++;
        console.log(`Publicação recebeu um deslike. Total de Deslikes: ${this.deslikes}`);
    }

    // Método para adicionar um comentário à publicação
    adicionarComentario(comentario: string): void {
        // Adiciona o comentário ao array de comentários e exibe uma mensagem indicando o novo comentário
        this.comentarios.push(comentario);
        console.log(`Novo comentário adicionado: "${comentario}"`);
    }
}

// Cria uma nova conta
Conta.criarConta("PandoraVenusia1", "PandoraVenusia@gmail.com", "NocturnaEterna");
// Realiza o login com a conta criada
const loginSucesso = Conta.login("PandoraVenusia@gmail.com", "NocturnaEterna");
// Se o login for bem-sucedido, cria uma nova publicação, dá like nela e adiciona um comentário
if (loginSucesso) {
    const publicacao1 = new Publicacao("PandoraVenusia", "Hoje está um dia ótimo!");
    publicacao1.darLike();
    publicacao1.adicionarComentario("Que bela foto!");
}






