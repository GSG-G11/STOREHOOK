import React, { Component } from 'react';
import './style.css';

class ProductDetails extends Component {
  state = { product: {}, count: 1 };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/v1/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) this.setState({ product: res.data });
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      if (prevState.count === 1) return;
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    const {
      product: { name, description, image, price },
      count,
    } = this.state;

    return (
      <div className="product-details">
        <div className="product-details-img">
          <img src={image} alt="" />
        </div>
        <div className="product-details-info">
          <h1 className="details-title">{name}</h1>
          <p className="detail-description">{description}</p>
          <div className="product-details-price">
            <span>{price}$</span>
          </div>
          <div className="count">
            <i class="bx bxs-message-square-minus" onClick={this.decrement}></i>
            <span>{count}</span>
            <i
              class="bx bxs-message-square-add"
              onClick={this.increment}
            ></i>{' '}
          </div>
          <h5 className="total">total:{price * count}$</h5>
          <div className="product-details-buttons">
            <button className="add-to-cart">Add to cart</button>
            <button className="add-to-wishlist">Buy</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
