import './addProduct.css';

const AddProductForm = ({
  showAndCloseModal,
  categories,
  AddProductHandler,
  errHandler,
}) => {
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

    console.log(product);
    fetch('/api/v1/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.data);
        if (data.status === 201) showAndCloseModal('addDisplay');
        if (data.status === 400) errHandler(data.message);
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  };

  return (
    <div className="add-product-holder">
      <div className="container">
        <div className="heading-parent">
          <div className="heading-form">
            <h2>Add More Products</h2>
            <div
              className="prod-icon"
              onClick={() => showAndCloseModal('addDisplay')}
            >
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
                className="form-control"
                placeholder="Enter Your Product Description"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" className="form-control">
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
                  className="form-control rd"
                  name="image"
                  placeholder="Enter Your Product Image url"
                  required
                />
              </div>
            </div>
            <div className="form-group btn-div">
              <button type="submit" className="btn btn-secondary" id="addStore">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
