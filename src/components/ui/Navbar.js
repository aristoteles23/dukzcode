import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [search, setSearch] = useState('');

    const searchOnSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    const searchOnChange = (e) => setSearch(e.target.value);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/" replace >!DUKZCODE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-initial" to="/" replace >HOME
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-initial" to="/language" replace >LENGUAJES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-initial" to="/framework" replace >FRAMEWORKS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-initial" to="/blog" replace >BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-initial" to="/about" replace >ABOUT</Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={searchOnSubmit}>
                            <input className="form-control me-sm-2" onChange={searchOnChange} type="text" name="v" placeholder="Write for Search" autoComplete="off" />
                            <button className="btn btn-success my-2 my-sm-0" type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
