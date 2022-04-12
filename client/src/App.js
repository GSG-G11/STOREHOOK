import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ProductsList , Productdetails ,LoginForm, Filters } from './Components';



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
  }

  // addProduct = (e) => {
  //   e.preventDefault();
  //   const { name, description, category, price, image } = e.target;
  //   const product = {
  //     name: name.value,
  //     description: description.value,
  //     category: category.value,
  //     price: price.value,
  //     image: image.value,
  //   };

  //   fetch('/api/v1/product', {
  //     headers: { method: 'POST' },
  //     body: JSON.stringify(product),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.status === 201) this.showAndCloseModal('alertDisplay');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       if (err.status === 500) window.location.href = '/error';
  //     });
  //   this.showAndCloseModal('addDisplay');
  // };

  showAndCloseModal = (modal) => {
    this.setState((preState) => {
      return { [modal]: !preState[modal] };
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
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
    } = this.state;
    return (
      <Router>
        <div>
          <Navbar
            handleChange={this.handleChange}
            searchWords={searchWords}
            isLoggedIn={isLoggedIn}
            showLoginModal={this.showAndCloseModal}
          />
          <Filters
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
            <Route path="/product/:id">
              <Productdetails />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
