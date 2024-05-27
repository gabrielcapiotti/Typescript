"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cidade {
    constructor(nome, sigla, emergencia, criterio) {
        this.nome = nome;
        this.sigla = sigla;
        this.emergencia = 0;
        this.pessoas = [];
        this.criterios = [];
    }
    buscarDados() {
        return {
            nome: this.nome,
            sigla: this.sigla,
            emergencia: this.emergencia,
            pessoas: this.pessoas,
        };
    }
    atualizarEmergencia(valor) {
        this.emergencia = valor;
        if (this.pessoas.length > 5) {
            this.emergencia = 5;
            console.log("Estado Critico!");
        }
        else if (this.pessoas.length <= 4) {
            this.emergencia = 4;
            console.log("Estado de Alerta Máximo!");
        }
        else if (this.pessoas.length <= 3) {
            this.emergencia = 3;
            console.log("Estado de Alerta!");
        }
        else if (this.pessoas.length <= 2) {
            this.emergencia = 2;
            console.log("Estado de Atenção!");
        }
        else if (this.pessoas.length <= 1) {
            this.emergencia = 1;
            console.log("Estado de Observação");
        }
    }
    adicionarPessoa(pessoa) {
        this.pessoas.push(...pessoa);
    }
    adicionarCriterio(criterio) {
        this.criterios.push(...criterio);
        const emergencia = this.calcularEmergencia();
        this.emergencia = emergencia;
    }
    calcularEmergencia() {
        if (this.emergencia == 5) {
            return this.emergencia;
        }
        const totalNivel = this.criterios.reduce((level, criterio) => {
            return level + criterio.buscarNivel();
        }, 0); // Começamos com um acumulador inicial de 0
        const media = totalNivel / this.criterios.length;
        if (media > 5) {
            return 5;
        }
        return media;
        // O totalNivel agora contém a soma dos níveis de todos os critérios
        return totalNivel;
    }
}
exports.default = Cidade;
