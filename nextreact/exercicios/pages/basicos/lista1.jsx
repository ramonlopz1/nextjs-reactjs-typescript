export default () => {
    return (
        <div>
            { gerarLista(15) }
        </div>
    )
}

const gerarLista = (size) => {
    const arr = Array(size)

    for (let i = 0; i < size; i++) {
        arr.push(<span>{i}</span>)
    }
    
    return arr
}