const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="clo-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text text-center text-uppercase">{likes} Me gusta</p>
        <p className="card-text text-center text-uppercase text-muted ">
          {views} Vistas🫣
        </p>
      </div>
      <div className="card-footer">
        <a
          type="button"
          href={largeImageURL}
          target="_blank"
          className="btn btn-outline-primary   btn-block w-100 text-uppercase"
          rel="noopener noreferrer"
        >
          Ver Imagen
        </a>
      </div>
    </div>
  );
};

export default Imagen;
