import React from 'react';
import Productcard from './Productcard';
import './cart.css';

function ListofCardproducts({
  cart,
  incretmentQun,
  decretmentQun,
  deleteCartProcuct,
}) {
  let cartarr = localStorage.getItem('cart');
  let sumitem;

  if (cartarr && cartarr.length > 0) {
    sumitem = JSON.parse(cartarr)
      .map((c) => c.quantity)
      .reduce((prev, cur) => prev + cur, 0);
  }

  return (
    <>
      <h1 className="Cart-heading">
        Cart <span>({sumitem ? sumitem : 0} Item)</span>
      </h1>
      {cart.length > 0 ? (
        <>
          <div className="cart-prod-holder">
            <div className="product-cart-list">
              {cart.map((cart) => {
                return (
                  <Productcard
                    cart={cart}
                    key={Math.random() * 10}
                    incretmentQun={incretmentQun}
                    decretmentQun={decretmentQun}
                    deleteCartProcuct={deleteCartProcuct}
                  />
                );
              })}
            </div>
            <div className="jumbotron">
              <h2>Card Total</h2>
              <div className="total-head">
                <p>Cart Subtotal</p>
                <p>${cart[0].price}</p>
              </div>
              <div className="total-pay-btn">
                <div className="together-div">
                  <button type="button" className="btn btn-primary">
                    <p>Together To pay</p> <p>$53.33</p>
                  </button>
                </div>
                <div className="checkout-div">
                  <button type="button" className="btn btn-primary">
                    Proceed to Checkout
                  </button>
                </div>
                <div className="empty-div">
                  <button type="button" className="btn btn-primary">
                    Empty Cart{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="no-item">
            {' '}
            <i className="bx bx-cart-alt"></i> there no item in your cart
          </p>
        </>
      )}
    </>
  );
}

export default ListofCardproducts;
