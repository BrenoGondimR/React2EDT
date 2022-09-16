import React from "react";
import './Style.css'

const Inputs = (props) => {
    return (
        <div className='Container-Input'>
            <label>{props.label}</label>
            <input type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default Inputs