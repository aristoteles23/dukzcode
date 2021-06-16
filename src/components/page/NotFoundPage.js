import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-3 animate__animated animate__fadeIn">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <h1 className="text-center">Not found component!</h1>
                        <h3 className="text-center">You just hit a route that doesn't exist... the sadness.
                            But don't worry! Here is a dancing banana for you!</h3>
                        <div className="text-center">
                            <Link to="/" className="btn btn-danger my-3">Go to Home</Link>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;
