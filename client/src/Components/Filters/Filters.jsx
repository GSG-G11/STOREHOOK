import './Filters.css';

export default function Filters({
  categories,
  handleChange,
  categorySelected,
  sort,
  isLoggedIn,
  showAndCloseModal,
}) {
  return (
    <div className="filters">
      <div className="cate-price-filter">
        <label>
          Categories
          <select
            className="select-options"
            value={categorySelected}
            name="categorySelected"
            onChange={handleChange}
          >
            <option value="All">All</option>
            {categories.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Sort
          <select
            className="select-options"
            value={sort}
            name="sort"
            onChange={handleChange}
          >
            <option value="Newest">Newest</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
          </select>
        </label>
      </div>
      {isLoggedIn && (
        <div
          className="add-product-btn"
          onClick={() => showAndCloseModal('addDisplay')}
        >
          Add Product
        </div>
      )}
    </div>
  );
}
