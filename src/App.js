import React, {useState} from 'react';
import Banner from "./Components/Banner/Index";
import Formulario from "./Components/Formulario/Index";


function App() {


        const [colaboradores, setColaboradores] = useState([])

        const aoNovoColaboradorAdicionado = (colaborador) => {
            console.log(colaborador)
            setColaboradores([...colaboradores, colaborador])
        }

    return (
      <div className="App">
          <Banner/>
          <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      </div>
    );

}

export default App;
