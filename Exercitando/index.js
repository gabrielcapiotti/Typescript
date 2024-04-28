"use strict";
/*
Claro, aqui estão cinco exercícios simples de TypeScript:

1. **Definindo tipos básicos:**
   Crie uma interface `Pessoa` com as seguintes propriedades: `nome` (string), `idade` (number), `email` (string, opcional). Em seguida, declare uma variável do tipo `Pessoa` e atribua valores a ela.
*/
const pessoa = {
    nome: "Pandora Venusia-MorningStar",
    idade: 348,
    profissao: "Matriarca Venusia",
    conjuge: "Nocturna MorningStar"
};
/*
2. **Função com tipos explícitos:**
   Crie uma função chamada `soma` que aceita dois parâmetros do tipo number e retorna a soma desses dois números. Certifique-se de definir explicitamente os tipos dos parâmetros e o tipo de retorno da função.
*/
function soma(a, b) {
    return a + b;
}
const resultado = soma(187, 912);
let nota;
nota = "A";
nota = 8;
const familia = {
    familia: "Venuttia",
    chefeFamiliar: "Aragorn",
    nivelPoder: 40.000,
    energia: "mana"
};
/*
5. **Validação de parâmetros de função:**
   Escreva uma função chamada `mostrarMensagem` que aceita um parâmetro chamado `mensagem` do tipo string. Dentro da função, verifique se a mensagem não está vazia. Se não estiver vazia, imprima a mensagem no console. Se estiver vazia, imprima uma mensagem de erro.
*/
function revelarVenusia(venusia) {
    if (venusia.trim() !== "") {
        console.log(venusia);
    }
    else {
        console.error("Erro: mensagem vazia!");
    }
}
revelarVenusia("Pandora Venusia-MorningStar é a melhor venusia de todas.");
revelarVenusia("");
/*
Esses exercícios devem proporcionar uma prática básica para trabalhar com tipos em TypeScript.
*/ 
