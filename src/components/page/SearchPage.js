import React from 'react'
import { Link, useParams } from 'react-router-dom';

const SearchPage = () => {
    let { param } = useParams();
    console.log('Param: ' + param);
    return (
        <React.Fragment>
            <div className="container-fluid p-3 animate__animated animate__fadeIn">
                <section>
                    <h2>Se encontraron 5 resultado</h2>

                    <div className="alert alert-secondary">
                        <strong>React JS</strong> <span className="badge rounded-pill bg-success">Language</span><br />
                        <span>La libreria mas usada por Facebook, para los desarrolladores front-end</span><br />
                        <Link className="alert-link" to="/about">Ver detalle</Link>
                    </div>

                    <div className="alert alert-secondary">
                        <strong>CRUD con React JS</strong> <span className="badge rounded-pill bg-info">Tutorial</span><br />
                        <span>Aprende como crear un CRUD basico con React JS</span><br />
                        <Link className="alert-link" to="/about">Ver detalle</Link>
                    </div>

                    <div className="alert alert-secondary">
                        <strong>Ventajas de usar React JS</strong> <span className="badge rounded-pill bg-warning">Blog</span><br />
                        <span>Si bien es cierto, React esa una de las librerias mas usadas en el año 2021, pero no tan solo fue eso, sino ...</span><br />
                        <Link className="alert-link" to="/about">Ver detalle</Link>
                    </div>

                </section>
            </div>
        </React.Fragment>
    )
}

export default SearchPage;
