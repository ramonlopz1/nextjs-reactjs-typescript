"use strict";
// string
let nome = 'João';
console.log(nome);
// number
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean
let possui = false;
// Arrays
let hobbies = ["cozinhar", "kuenka", "memkua"];
// Tuplas
let endereco = ["Av principal", 99];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja"; // 3
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(Cor.Azul);
// any
let carro = 'BMW';
carro = { marca: 'BMW', ano: 2019 };
