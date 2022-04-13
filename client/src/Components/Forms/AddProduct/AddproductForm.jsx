import './addProduct.css';

const AddProductForm = ({
  showAndCloseModal,
  categories,
  addProductHandler,
  updateProductHandler,
  isEditing,
  currentProduct,
  handleState,
}) => {
  let productId = '';
  let defaultName = '';
  let defaultDesc = '';
  let defaultPrice = '';
  let defaultImage = '';
  let defaultCategory = '';
  let wordBtn = 'Add';

  if (isEditing) {
    const { id, name, description, price, category, image } = currentProduct;
    productId = id;
    defaultName = name;
    defaultDesc = description;
    defaultPrice = price;
    defaultImage = image;
    defaultCategory = category;
    wordBtn = 'Update';
  }

  const addProduct = (e) => {
    e.preventDefault();
    const { name, description, category, price, image } = e.target;

    const product = {
      name: name.value.trim(),
      description: description.value.trim(),
      image: image.value.trim(),
      categoryId: +category.value.trim(),
      price: +price.value.trim(),
    };

    if (
      product.name === '' ||
      product.description === '' ||
      product.image === '' ||
      product.category === '' ||
      product.price === ''
    )
      return;

    if (isEditing) updateProductHandler(product, productId);
    else addProductHandler(product);
  };

  const closeModal = () => {
    if (isEditing) handleState('isEditing', false);
    showAndCloseModal('addDisplay');
  };

  return (
    <div className="add-product-holder">
      <div className="container">
        <div className="heading-parent">
          <div className="heading-form">
            <h2>{wordBtn} More Products</h2>
            <div className="prod-icon" onClick={closeModal}>
              <i className="bx bx-x"></i>
            </div>
          </div>
        </div>
        <div className="form-bg">
          <form onSubmit={addProduct}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                defaultValue={defaultName}
                className="form-control"
                placeholder="Enter Your Product Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                defaultValue={defaultDesc}
                className="form-control"
                placeholder="Enter Your Product Description"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                defaultValue={
                  categories.filter((cate) => cate.name === defaultCategory)[0]
                    .id
                }
                className="form-control"
              >
                <option disabled value="0">
                  Select a Category
                </option>
                {categories.map(({ id, name }) => {
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Price</label>
              <div className="input-group-text-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  name="price"
                  defaultValue={defaultPrice}
                  className="form-control rd"
                  placeholder="Enter Your Product Price"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label> Image </label>
              <div className="input-group-text-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-paperclip"></i>
                  </span>
                </div>
                <input
                  type="url"
                  defaultValue={defaultImage}
                  className="form-control rd"
                  name="image"
                  placeholder="Enter Your Product Image url"
                  required
                />
              </div>
            </div>
            <div className="form-group btn-div">
              <button type="submit" className="btn btn-secondary" id="addStore">
                {wordBtn} Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
