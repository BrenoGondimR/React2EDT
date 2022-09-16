import React from "react";
import './Style.css'

const Button = (props) => {
    return (
      <button className='Button'>
          {props.texto}
      </button>
    )
}

export default Button