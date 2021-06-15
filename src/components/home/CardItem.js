import React from 'react';

const CardItem = ({ card }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card card-border mb-3">
                <div className="card-header text-center">
                    <i className={card.icon}></i>
                </div>
                <div className="card-body text-center">
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.descri}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItem;
