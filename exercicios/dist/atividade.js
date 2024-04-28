"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./model/Animal"));
const animal1 = new Animal_1.default('Réptil', 4, true, 'Crocodilo');
const animal2 = new Animal_1.default('Canino', 4, true);
console.log(animal1);
console.log(animal2);
animal1.andar();
animal2.respirar();
