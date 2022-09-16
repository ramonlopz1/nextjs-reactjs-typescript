import questoes from '../bancoDeQuestoes'

export default function questoesProId(req, res) {
    const idSelecionado = +req.query.id

    // usa as classes para manipular a api.
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()

        // paraObjeto: converte a instância de questao em objeto literal
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        res.status(204).send()
    }
}