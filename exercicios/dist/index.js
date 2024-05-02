"use strict";
// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contador_1 = __importDefault(require("./model/Contador"));
const contador = new Contador_1.default(2);
// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor
const Bola_1 = __importDefault(require("./model/Bola"));
const bola = new Bola_1.default("preta", 4, "couro");
// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.
/*
import Conta from "./model/Conta";

const conta = new Conta("AB");
*/
// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
const Calculadora_1 = __importDefault(require("./model/Calculadora"));
const calculadora = new Calculadora_1.default();
// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
const BombaCombustivel_1 = __importDefault(require("./model/BombaCombustivel"));
const bombaCombustivel = new BombaCombustivel_1.default("etanol", 5, 20);
const Livro_1 = __importDefault(require("./model/Livro"));
const boxHerdeirodaMana = new Livro_1.default(7, "Herdeiro da Mana", "Capa dura", 1200);
const Cachorro_1 = __importDefault(require("./model/Cachorro"));
const Gato_1 = __importDefault(require("./model/Gato"));
const cacau = new Cachorro_1.default('Labradora', 'Cacau', false);
const frajola = new Gato_1.default("frajola", "preto", true);
console.log(cacau);
console.log(frajola);
const Conta_1 = __importDefault(require("./model/Conta"));
const ContaKids_1 = __importDefault(require("./model/ContaKids"));
const minhaConta = new Conta_1.default();
minhaConta.deposito(1000);
const contaKids = new ContaKids_1.default(minhaConta, 20);
contaKids.deposito(1000);
console.log(minhaConta);
console.log(contaKids);
