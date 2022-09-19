import React, {useState} from "react";
import './Style.css'
import Inputs from "../Inputs/Index";
import Selector from "../Select/Index";
import Button from "../Button/Index";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [squad, setSquad] = useState('')


    const squads = [
        'Squad 1',
        'Squad 2',
        'Squad 3',
        'Squad 4',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            squad
        })

    }
    return(
        <section className='Container-Formulario'>
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados para criar seu card </h1>
                <Inputs valor={nome}  aoAlterado={valor => setNome(valor)} obrigatorio={true} label='Nome' placeholder='Digite aqui seu nome'/>
                <Inputs  valor={cargo} aoAlterado={valor => setCargo(valor)} label='Curso' placeholder='Digite aqui seu cargo'/>
                <Inputs valor={imagem} aoAlterado={valor => setImagem(valor)} label='Perfil' placeholder='Digite aqui a URL da imagem '/>
                <Selector  valor={squad} aoAlterado={valor => setSquad(valor)} obrigatorio={true} itens={squads} label='Squad'/>
                <Button texto='Criar Card'/>
            </form>
        </section>
    )
}

export default Formulario