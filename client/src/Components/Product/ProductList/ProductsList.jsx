import ProductCard from '../ProductCard';
import './ProductsList.css';

export default function ProductsList({
  isLoggedIn,
  products,
  searchWords,
  categorySelected,
  sort,
  showAndCloseModal,
  handleState,
  addToCart,
}) {
  const filterProducts = () => {
    let filteredProducts = products;
    if (searchWords.length !== 0)
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchWords.toLowerCase())
      );
    if (categorySelected !== 'All')
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categorySelected
      );
    if (sort === 'Newest') filteredProducts.sort((a, b) => b.id - a.id);
    if (sort === 'Lowest') filteredProducts.sort((a, b) => a.price - b.price);
    if (sort === 'Highest') filteredProducts.sort((a, b) => b.price - a.price);

    return filteredProducts;
  };

  return (
    <section className="wrap-product-list">
      <div className="product-list">
        <ProductCard
          handleState={handleState}
          products={filterProducts()}
          isLoggedIn={isLoggedIn}
          showAndCloseModal={showAndCloseModal}
          addToCart={addToCart}
        />
      </div>
    </section>
  );
}
