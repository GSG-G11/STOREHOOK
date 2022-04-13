import ProductCard from '../ProductCard';
import './ProductsList.css';

export default function ProductsList({ products, isLoggedIn, addToCart }) {
  return (
    <section className="wrap-product-list">
      <div className="product-list">
        <ProductCard products={products} isLoggedIn={isLoggedIn} addToCart ={addToCart}/>
      </div>
    </section>
  );
}
