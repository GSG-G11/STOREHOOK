import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    fetch('/api/v1/categories')
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) this.setState({ categories: res.data });
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  }

  render() {
    const { categories } = this.state;
    const { handleChange, categorySelected, sort, isLoggedIn } = this.props;
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
        {isLoggedIn && <div className="add-product-btn">Add Product</div>}
      </div>
    );
  }
}
