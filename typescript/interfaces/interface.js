"use strict";
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log("Olá meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
///
const pessoa = {
    nome: 'Ramon',
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é ", this.nome, " ", sobrenome);
    }
};
pessoa.saudar("Lopes");
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
