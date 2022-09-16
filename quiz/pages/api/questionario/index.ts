import { embaralhar } from '../../../functions/arrays'
import questoes from '../bancoDeQuestoes'

export default function questionario(req, res) {
    // 'questao' vai ser a instância do objeto bancoDeQuestoes.
    // logo será possível acessar seus métodos e atributos
    const ids = questoes.map(questao => questao.id)

    //
    res.status(200).json(embaralhar(ids))
}