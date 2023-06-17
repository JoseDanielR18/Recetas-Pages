/* eslint-disable react/prop-types */
export const Recetas = ({ salir, ejecutarForm, setBuscador, isLoading, filtros }) => {
    return (
        <div className="body-recipes">
            <div className="fondo-recipes">
                <div className="fondo-color-recipes">
                    <header>
                        <nav className="container">
                            <div className="text-cook">
                                <a href="#">Recetas</a>
                            </div>
                            <div className="exit">
                                <button onClick={() => salir()} className="text-dark btn-recipes"><i className="fa-solid fa-right-from-bracket fa-xl" style={{ color: "#ffcd9f" }} /></button>
                            </div>
                        </nav>
                    </header>
                    <div className="buscador-recipes mt-5">
                        <div className="text-decoration-recipes animate__animated animate__fadeInDown">
                            <h2>Explora una amplia variedad de <span className="text-color">recetas</span> o ingresa el nombre de cualquier alimento que desees para encontrar recetas que incluyan ese <span className="text-color">ingrediente</span>.</h2>
                        </div>
                        <form onSubmit={ejecutarForm} className="form-input">
                            <div className="mt-3">
                                <input type="text" placeholder="Busca tu receta aquí" className="size-input" autoFocus onChange={(e) => setBuscador(e.target.value)} />
                            </div>
                        </form>
                        <a href="#view-recipes" className="btn mt-5 animate__animated animate__fadeInLeft">Ver Recetas</a>
                    </div>
                </div>
            </div>
            <div id="view-recipes">
                <div className="recipes">
                    <h1>Nuestras Recetas</h1>
                    {
                        isLoading
                            ? <h1><i className="fa-solid fa-spinner fa-spin fa-2xl mt-5"></i></h1>
                            : <div className="cartas">
                                {filtros.length > 0 ? (
                                    filtros.map((receta) => (
                                        <div key={receta.id}>
                                            <div
                                                className="card text-white animate__animated animate__fadeInDown"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#exampleModal${receta.id}`}
                                            >
                                                <img src={receta.urlImg} className="card-img-top" alt={receta.title} />
                                                <div className="card-body">
                                                    <p className="text-hover">Ver más</p>
                                                    <h5 className="card-title"><strong>{receta.title}</strong></h5>
                                                    <p className="card-text">{receta.instructions}</p>
                                                </div>
                                            </div>
                                            <div
                                                className="modal fade"
                                                id={`exampleModal${receta.id}`}
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                                    <div className="modal-content text-white">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-3 text-white" id="exampleModalLabel">{receta.title}</h1>
                                                            <button type="button" className=" btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="img-food animate__animated animate__bounce animate__fadeInLeft">
                                                                <img src={receta.urlImg} alt="" />
                                                            </div>
                                                            <div className="text-modal">
                                                                <p className="animate__animated animate__fadeInRight">{receta.instructions}</p>
                                                            </div>
                                                        </div>
                                                        <div className="footer-modal">
                                                            <ul>
                                                                <li>Categoría: <strong>{receta.category.nameCategory}</strong></li>
                                                                <li>País: <strong>{receta.country}</strong></li>
                                                                <li><a href={receta.urlVideo} target="_"><i className="fa-brands fa-youtube fa-xl"></i> Mira la Receta Aqui</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                ) : (
                                    <p>Error al encontrar la receta</p>
                                )}
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
