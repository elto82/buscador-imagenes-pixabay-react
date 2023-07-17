import { useState } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const handleBuscarImagen = (e) => {
    e.preventDefault();
    if (termino.trim() === "") {
      setError(true);

      return;
    }
    setError(false);
    console.log(termino);
    setTermino("");
    setBusqueda(termino);
  };

  return (
    <form onSubmit={handleBuscarImagen}>
      <div className="row ">
        <div className="form-group  col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo futbol"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error && <Error mensaje="El campo no puede estar vacio" />}
    </form>
  );
};

export default Formulario;
