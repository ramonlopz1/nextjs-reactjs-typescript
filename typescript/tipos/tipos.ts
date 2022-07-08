// string
let nome: string = 'João'
console.log(nome)

// number
let idade: number = 27
idade = 27.5

console.log(idade)

//boolean
let possui: boolean = false


// Arrays
let hobbies: any[] = ["cozinhar", "kuenka", "memkua"]

// Tuplas
let endereco: [string, number] = ["Av principal", 99]

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 2, // 2
    Laranja // 3
}

let minhaCor: Cor = Cor.Verde

console.log(Cor.Azul)

// any
let carro: any = 'BMW'
carro = { marca: 'BMW', ano: 2019 }
