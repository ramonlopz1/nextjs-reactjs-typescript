// public List[] setList() {}
// o parâmetro (): any[] após a função indica que tipo de dado ela deve retornar
export function embaralhar(elementos: any[]): any[] {
    return elementos
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((a, b) => a.aleatorio - b.aleatorio)
        .map(obj => obj.valor)
}