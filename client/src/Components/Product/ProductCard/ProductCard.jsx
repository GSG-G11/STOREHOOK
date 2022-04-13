import { Link, Route } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({
  products,
  isLoggedIn,
  addToCart,
  updateProduct,
  showAndCloseModal,
  handleIdDelete,
}) {
  const deleteProduct = (id) => {
    handleIdDelete(id);
    showAndCloseModal('confirmDisplay');
  };
  return (
    <Route>
      <>
        {isLoggedIn
          ? products.map((product) => {
              const { id, name, price, image, category } = product;
              return (
                <div className="product-card" key={id || Date.now()}>
                  <div className="wrap-img">
                    <div className="product-category">{category}</div>
                    <div
                      className="delete-product card-delete"
                      onClick={() => deleteProduct(id)}
                    >
                      <i className="bx bx-trash-alt"></i>
                    </div>
                    <Link to={`/product/${id}`}>
                      <img
                        className="product-img"
                        src={image}
                        alt="product img"
                      />
                    </Link>
                  </div>
                  <div className="product-info">
                    <div className="wrap-name-price">
                      <p className="product-name">{name}</p>
                      <p className="product-price">${price}</p>
                    </div>
                    <div
                      className="icon-wrap card-edit"
                      onClick={() => updateProduct(id)}
                    >
                      <i className="bx bx-edit"></i>
                    </div>
                  </div>
                </div>
              );
            })
          : products.map((product) => {
              const { id, name, price, image, category, description } = product;
              return (
                <div className="product-card" key={id || Date.now()}>
                  <div className="wrap-img">
                    <div className="product-category">{category}</div>
                    <Link to={`/product/${id}`}>
                      <img
                        className="product-img"
                        src={image}
                        alt="product img"
                      />
                    </Link>
                  </div>
                  <div className="product-info">
                    <div className="wrap-name-price">
                      <p className="product-name">{name}</p>
                      <p className="product-price">${price}</p>
                    </div>
                    <div
                      className="icon-wrap card-cart"
                      onClick={() =>
                        addToCart({
                          id,
                          name,
                          price,
                          image,
                          category,
                          description,
                        })
                      }
                    >
                      <i className="bx bx-shopping-bag"></i>
                    </div>
                  </div>
                </div>
              );
            })}
      </>
    </Route>
  );
}
