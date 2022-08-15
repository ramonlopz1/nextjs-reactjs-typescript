import React from 'react'

// pessoa tem que implementa
interface PessoaProps {
    nome: string,
    idade?: number
}

export default function Pessoa(props: PessoaProps) {
    return (
        <div>
            <div>
                Nome: {props.nome}
            </div>
            <div>
                idade: {props.idade ?? 'Não informada'}
            </div>
        </div>
    )
}