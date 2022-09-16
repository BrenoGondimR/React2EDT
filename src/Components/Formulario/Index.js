import React from "react";
import './Style.css'
import Inputs from "../Inputs/Index";
import Selector from "../Select/Index";
import Button from "../Button/Index";

const Formulario = () => {
    const squads = [
        'Squad 1',
        'Squad 2',
        'Squad 3',
        'Squad 4',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form Submetido')
    }
    return(
        <section className='Container-Formulario'>
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados para criar seu card </h1>
                <Inputs label='Nome' placeholder='Digite aqui seu nome'/>
                <Inputs label='Curso' placeholder='Digite aqui seu cargo'/>
                <Inputs label='Perfil' placeholder='Digite aqui a URL da imagem '/>
                <Selector itens={squads} label='Squad'/>
                <Button texto='Criar Card'/>
            </form>
        </section>
    )
}

export default Formulario