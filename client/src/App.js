import { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ProductsList } from './Components';
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
  };

  componentDidMount() {
    // fetch('/api/v1/products')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.status === 200)
    //       this.setState({ products: res.data, isLoading: false });
    //   })
    //   .catch((err) => {
    //     if (err.status === 500) window.location.href = '/error';
    //   });
    axios
      .get('/api/v1/products')
      .then((res) => {
        if (res.status === 200)
          this.setState({ products: res.data.data, isLoading: false });
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  }

  addProduct = (e) => {
    e.preventDefault();
    const { name, description, category, price, image } = e.target;
    const product = {
      name: name.value,
      description: description.value,
      category: category.value,
      price: price.value,
      image: image.value,
    };

    fetch('/api/v1/product', {
      headers: { method: 'POST' },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) this.showAndCloseModal('alertDisplay');
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
    this.showAndCloseModal('addDisplay');
  };

  showAndCloseModal = (modal) => {
    this.setState((preState) => {
      return { [modal]: !preState[modal] };
    });
  };

  render() {
    const { products, isLoggedIn, isLoading, loginDisplay } = this.state;
    return (
      <Router>
        <div>
          <Navbar
            isLoggedIn={isLoggedIn}
            showLoginModal={this.showAndCloseModal}
          />
          {isLoading && <div>Loading...</div>}
          <Switch>
            <Route exact path="/">
              <ProductsList products={products} isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
