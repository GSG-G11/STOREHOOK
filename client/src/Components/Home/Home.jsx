import { Component } from 'react';
import { ProductsList, Filters } from '../../Components';

export default class Home extends Component {
  render() {
    const {
      categories,
      showAndCloseModal,
      isLoggedIn,
      handleChange,
      categorySelected,
      sort,
      searchWords,
      products,
    } = this.props;
    return (
      <div>
        <Filters
          categories={categories}
          showAndCloseModal={showAndCloseModal}
          isLoggedIn={isLoggedIn}
          handleChange={handleChange}
          categorySelected={categorySelected}
          sort={sort}
        />
        <ProductsList
          searchWords={searchWords}
          categorySelected={categorySelected}
          sort={sort}
          products={products}
          isLoggedIn={isLoggedIn}
        />
      </div>
    );
  }
}
