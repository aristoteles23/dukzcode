import React, { useState, useEffect } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import utilService from '../../data/utilService';
import CardItem from '../home/CardItem';
import homeImage from '../../promo-figure-alt.svg';

const HomePage = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(utilService.getCardsHome());
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div className="container-fluid p-3">
                <section>
                    <div className="row align-items-center justify-content-center m-3">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit ipsum dolor.</h1>
                            <h5>Lorem ipsum dolor sit, amet sit amet</h5>
                            <div className="text-center mt-3">
                                <button type="button" className="btn btn-outline-success m-2">COMENZAR <i
                                    className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                                <button type="button" className="btn btn-outline-danger m-2">CONOCER <i
                                    className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="row align-items-center justify-content-center mx-auto mt-3">
                                <div className="col-sm-8 col-md-8 col-lg-12 col-xl-10">
                                    <img src={homeImage} className="img-fluid" alt="promo-figure-alt.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="text-center mt-5 mb-5">
                        <h2>MADE FOR DEVELOPERS</h2>
                        <h5>Apps web and app mobile</h5>
                    </div>
                </section>

                <section>
                    <div className="row justify-content-center mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5 mt-3 p-2">
                        {
                            cards.map(card => <CardItem key={card.id} card={card} />)
                        }
                    </div>
                </section>

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;
