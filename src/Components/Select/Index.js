import React from "react";
import './Style.css'


const Selector = (props) => {
    return (
        <div className='Container-Selector'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} name='Squad'>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Selector