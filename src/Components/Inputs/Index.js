import React from "react";
import './Style.css'

const Inputs = (props) => {


    const aoDigitado = (evento) => {
     props.aoAlterado(evento.target.value)
    }
    return (
        <div className='Container-Input'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default Inputs