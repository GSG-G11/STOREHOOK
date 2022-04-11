import React from 'react';
import './addProduct.css';

const AddproductForm = (props) => {
  return (
    <div className="AddProduct-holder">
      <div className="container">
        <div className="heading-parent">
        <div className="heading-form">
              <h2>Add More Products</h2>
              <div className="prod-icon"><i className='bx bx-x'></i></div>
          </div>
        </div>
        <div className="form-bg">
            <form >
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Enter Your Product Name"/>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" rows="4" placeholder="Enter Your Product Description"></textarea>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="form-group">
                <label >Price</label>
                <div className="input-group-text-prepend">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input type="number" className="form-control" placeholder="Enter Your Product Price"/>
                </div>
                </div>

                <div className="form-group">
                <label> Image </label>
                <div className="input-group-text-prepend">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className='bx bx-paperclip'></i></span>
                  </div>
                  <input type="number" className="form-control" placeholder="Enter Your Product Image url"/>
                </div>
                </div>
                <div className="form-group btn-div">
                  <button type="submit" className="btn btn-secondary" id="addStore">Add Product</button>
                </div>
                
            </form>
        </div>
        </div>
    </div>
  );
};

export default AddproductForm;