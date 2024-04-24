"use strict";
/*1-
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
/*2
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
function mostrarInformacoes(usuario) {
    // Verifica se o salário foi informado
    const salario = usuario.salario !== undefined ? `R$ ${usuario.salario}` : "N/A";
    // Mostra as informações do usuário
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salario}`);
}
// Exemplos de usuários
const usuario1 = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: 1000
};
const usuario2 = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI"
};
// Mostra informações dos usuários
mostrarInformacoes(usuario1);
mostrarInformacoes(usuario2);
const diretor = {
    nome: "Marcelo",
    idade: 34,
    salario: 10000,
    comissionamento: 20
};
function mostrarDiretor(diretor) {
    console.log(diretor);
}
mostrarDiretor(diretor);
const lista = [];
function imprimir(lista) {
    lista.forEach(pessoa => {
        if ('ocupacao' in pessoa) {
            mostrarInformacoes(pessoa);
        }
        else {
            mostrarDiretor(pessoa);
        }
    });
}
// Exemplo de uso da função imprimir
imprimir([usuario1, usuario2, diretor]);
