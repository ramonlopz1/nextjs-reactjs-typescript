// Igual a Java
interface Humano {
    nome: string
    idade?: number // opcional
    [prop: string]: any // aceita atributo com qualquer nome
    saudar(sobrenome: string): void // método obrigatório
}


class Cliente implements Humano {
    nome: string = ""
    ultimaCompra: Date = new Date

    saudar(sobrenome: string) {
        console.log("Olá meu nome é " + this.nome + " " + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = "Han"
meuCliente.saudar("Solo")

console.log(meuCliente.ultimaCompra)

///

const pessoa = {
   nome: 'Ramon',
   idade: 27,
   saudar(sobrenome: string) {
    console.log("Olá, meu nome é ", this.nome, " ", sobrenome)
   }
}

pessoa.saudar("Lopes")

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))