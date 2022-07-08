export default function jsx4() {
    const subtitulo = "Estou no JS"
    const maximo = <h4>{Math.max(13, 39)}</h4>
    return (

        <div>
            <h1>JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            {maximo}
            <h5>{entre(9, 1, 10)}</h5>

        </div>
    )
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "Sim"
    } else {
        return "Não"
    }
}