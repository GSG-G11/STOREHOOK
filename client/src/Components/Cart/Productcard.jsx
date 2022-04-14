import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './cart.css';

const Productcard = ({
  cart,
  incretmentQun,
  decretmentQun,
  deleteCartProcuct,
}) => {
  const { id, name, description, image, quantity, totalPrice } = cart;
  return (
    <Router>
      <div>
        <div className="product-card" key={id}>
          <div className="img-prod-info">
            <div className="prod-card-info">
              <img className=" card-img" src={image} alt="product img" />
              <div className="wrap-name-price">
                <p className="product-name cart-name">{name}</p>
                <p className="product-desc">{description}</p>
              </div>
            </div>
            <div className="card-action">
              <div
                className="incr icon-wrap"
                onClick={(id) => decretmentQun(cart.id)}
              >
                {' '}
                -{' '}
              </div>
              <div className="qun-num">
                <p> {quantity >= 1 ? quantity : 1} </p>
              </div>
              <div
                className="dec icon-wrap"
                onClick={(id) => incretmentQun(cart.id)}
              >
                {' '}
                +{' '}
              </div>
            </div>
            <div className="card-Price">
              {' '}
              $ {totalPrice >= 0 ? totalPrice : 0}
            </div>
            <div
              className="card-delete"
              onClick={(id) => deleteCartProcuct(cart.id)}
            >
              <i className="bx bx-x cart-x"></i>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Productcard;
