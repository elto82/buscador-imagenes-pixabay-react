import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenePorPagina = 30;
      const key = "33399484-e1d7cbba2d2152a34154a5962";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenePorPagina}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenes(resultado.hits);

      setTotalPaginas(Math.ceil(resultado.totalHits / imagenePorPagina));

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarApi();
  }, [busqueda, paginaActual]);

  const handlePaginaAnterior = () => {
    if (paginaActual === 0) return;
    setPaginaActual(paginaActual - 1);
  };

  const handlePaginaSiguiente = () => {
    if (paginaActual > totalPaginas) return;
    setPaginaActual(paginaActual + 1);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center mb-4">
        <ListadoImagenes imagenes={imagenes} />
        {paginaActual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1 "
            onClick={handlePaginaAnterior}
          >
            Anterior &laquo;
          </button>
        )}

        {paginaActual === totalPaginas ? null : (
          <button
            type="button"
            className="btn btn-info ml-4"
            onClick={handlePaginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
