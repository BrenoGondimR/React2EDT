import React, { Component } from 'react';
import Banner from "./Components/Banner/Index";
import Formulario from "./Components/Formulario/Index";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner/>
          <Formulario/>
      </div>
    );
  }
}

export default App;
