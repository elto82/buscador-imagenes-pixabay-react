import React from "react";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
      </div>
      <Formulario />
    </div>
  );
};

export default App;
