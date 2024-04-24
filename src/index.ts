/*1- Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.

let aprovado: boolean

function media(nota1:number, nota2:number) {
    const media = (nota1+nota2)/2;

    if (media>=6) {
        aprovado = true
        console.log("aprovado!")
    } else {
        aprovado = false
        console.log("Reprovado!")
    }
}

media(6,8);
*/
/*2- Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado


interface Objeto  {
    nota1: number,
    peso1: number,
    nota2: number,
    peso2: number,
    nota3: number,
    peso3: number,
}

const objeto:Objeto = {
    nota1: 5,
    peso1: 1,
    nota2: 10,
    peso2: 2,
    nota3: 20,
    peso3: 3
}

function mediaPonderada(notas:Objeto) {
    const lista1 = (notas.nota1 * notas.peso1 + notas.nota2 * notas.peso2) / (notas.peso1 + notas.peso2);
    const lista2 = (notas.nota2 * notas.peso2 + notas.nota3 * notas.peso3) / (notas.peso2 + notas.peso3);

    console.log(lista1);
    console.log(lista2);
}

mediaPonderada(objeto);
*/

/*3- Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.


interface Carteira{
    saldo: number,
    entradas: number,
    saidas: number
}

const carteira:Carteira = {
    saldo: 1000,
    entradas: 100,
    saidas: 1800,
}

function transacoes(carteira:Carteira){
    carteira.saldo += carteira.entradas;
    console.log(carteira.saldo);

    if (carteira.saidas>carteira.saldo) {
        console.log("Voce não tem saldo suficiente!");
    } else {
        carteira.saldo -= carteira.saidas;
        console.log(carteira.saldo); 
    }


}
transacoes(carteira) 
*/

/* Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.

type Produto = {
    nome: string,
    preco: number,
};

const produtos: Produto[] = [];

function cadastrar(nome: string, preco: number) {
    const novoProduto = { 
        nome: nome,
        preco: preco
    };
    produtos.push(novoProduto); 
}

cadastrar("arroz", 5); 
cadastrar("feijão", 10);
cadastrar("ovo", 15);

console.log(produtos);

async function deletarProduto(nome: string) {
    const indice = produtos.findIndex((produto) => {
        return nome === produto.nome;
    });
    if (indice !== -1) {
        produtos.splice(indice, 1);
        console.log(produtos);
    } else {
        console.log("Produto não existe!");
    }
}

deletarProduto("feijão");
*/


/*5- Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”
*/

type User = {
    nome: string,
    idade: number,
    ocupacao: string,
    salario?: number | string // O salário é opcional e pode ser um número ou uma string
};

function mostrarInformacoes(usuario: User) {
    // Verifica se o salário foi informado
    const salario = usuario.salario !== undefined ? `R$ ${usuario.salario}` : "N/A";
    
    // Mostra as informações do usuário
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salario}`);
}

// Exemplos de usuários
const usuario1: User = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: 1000
};

const usuario2: User = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI"
};

// Mostra informações dos usuários
mostrarInformacoes(usuario1);
mostrarInformacoes(usuario2);

/* 6- Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
*/



type Diretor = {
    nome: string,
    idade: number,
    salario: number | string,
    comissionamento: number
}


const diretor:Diretor ={
    nome: "Marcelo",
    idade: 34,
    salario: 10000,
    comissionamento: 20

}

function mostrarDiretor(diretor:Diretor){
    console.log(diretor)
}
mostrarDiretor(diretor);

/* 7- Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor.
*/

const lista: UserOrDiretor[] = [];

type UserOrDiretor = User | Diretor;
    
function imprimir(lista:UserOrDiretor[]){
    lista.forEach(pessoa =>{
        if ('ocupacao' in pessoa) {
            mostrarInformacoes(pessoa as User);
        } else {
            mostrarDiretor(pessoa as Diretor);
        }
    });
}

// Exemplo de uso da função imprimir
imprimir([usuario1, usuario2, diretor]);
