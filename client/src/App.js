import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Navbar,
  ProductsList,
  LoginForm,
  Filters,
  AddProductForm,
} from './Components';

class App extends Component {
  state = {
    products: [],
    alertDisplay: false,
    loginDisplay: false,
    addDisplay: false,
    confirmDisplay: false,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    isLoading: true,
    searchWords: '',
    categorySelected: 'All',
    sort: 'Newest',
    categories: [],
    errMessage: '',
  };

  componentDidMount() {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200)
          this.setState({ products: res.data, isLoading: false });
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });

    fetch('/api/v1/categories')
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) this.setState({ categories: res.data });
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  }

  showAndCloseModal = (modal) => {
    this.setState((preState) => {
      return { [modal]: !preState[modal] };
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  AddProductHandler = (product) => {
    // this.setState((prevState) => {
    //   return { products: [product, ...prevState.products] };
    // });
    // this.setState({ products: [product, ...this.state.products] });
  };

  errHandler = (err) => {
    this.setState({ errMessage: err });
  };
  render() {
    const {
      products,
      isLoggedIn,
      isLoading,
      loginDisplay,
      searchWords,
      categorySelected,
      sort,
      addDisplay,
      categories,
    } = this.state;
    return (
      <Router>
        <div className={(addDisplay || loginDisplay) && 'root-container'}>
          <Navbar
            handleChange={this.handleChange}
            searchWords={searchWords}
            isLoggedIn={isLoggedIn}
            showLoginModal={this.showAndCloseModal}
          />
          <Filters
            categories={categories}
            showAndCloseModal={this.showAndCloseModal}
            isLoggedIn={isLoggedIn}
            handleChange={this.handleChange}
            categorySelected={categorySelected}
            sort={sort}
          />
          {isLoading && <div>Loading...</div>}
          {loginDisplay && (
            <LoginForm
              isLoggedIn={isLoggedIn}
              showAndCloseModal={this.showAndCloseModal}
            />
          )}
          {addDisplay && (
            <AddProductForm
              errHandler={this.errHandler}
              AddProductHandler={this.AddProductHandler}
              categories={categories}
              showAndCloseModal={this.showAndCloseModal}
            />
          )}
          <Switch>
            <Route exact path="/">
              <ProductsList
                searchWords={searchWords}
                categorySelected={categorySelected}
                sort={sort}
                products={products}
                isLoggedIn={isLoggedIn}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
