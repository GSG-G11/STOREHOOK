import { Component } from 'react';
import './App.css';
import Swal from 'sweetalert2';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  Navbar,
  Home,
  ProductDetails,
  AddProductForm,
  LoginForm,
  ConfirmModal,
  ListofCardproducts,
  NotFound
} from './Components';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
class App extends Component {
  state = {
    products: [],
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
    confirmToDeleteId: 0,
    currentProduct: {},
    isEditing: false,
  };

  fetchProducts = () => {
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
  };

  componentDidMount() {
    this.fetchProducts();
  }

  addToCart = (product) => {
    const { cart } = this.state;
    let newpord;

    cart.map((pro) => {
      if (pro.id === product.id) {
        pro.quantity += 1;
        pro.totalPrice += pro.price;
        newpord = pro;
        return newpord;
      }
      return pro;
    });

    if (!newpord) {
      cart.push({ ...product, quantity: 1, totalPrice: product.price });
    }

    this.setState({ cart: cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  decretmentQunPrice = (id) => {
    const { cart } = this.state;
    cart.forEach((pro) => {
      if (pro.id === id) {
        pro.quantity -= 1;
        pro.totalPrice -= pro.price;
        this.setState({ cart: cart });
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    });
  };

  incretmentQunPrice = (id) => {
    const { cart } = this.state;
    cart.forEach((pro) => {
      if (pro.id === id) {
        pro.quantity += 1;
        pro.totalPrice += pro.price;
        this.setState({ cart: cart });
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    });
  };

  removeAllItem = () => {
    this.setState({ cart: []})
    localStorage.removeItem('cart');
  }

  deleteCartProcuct = (id) => {
    const cartarr = JSON.parse(localStorage.getItem('cart')).filter(
      (pro) => pro.id !== id
    );
    this.setState({ cart: cartarr });
    localStorage.setItem('cart', JSON.stringify(cartarr));
  };

  showAndCloseModal = (modal) => {
    this.setState((preState) => {
      return { [modal]: !preState[modal] };
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addProductHandler = (product) => {
    fetch('/api/v1/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          Toast.fire({
            icon: 'success',
            title: 'Added successfully',
          });
          this.fetchProducts();
          this.showAndCloseModal('addDisplay');
        }
        if (data.status === 400) this.errHandler(data.message);
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  };

  updateProductHandler = (product, productId) => {
    fetch(`/api/v1/product/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          Toast.fire({
            icon: 'success',
            title: 'Updated successfully',
          });
          this.fetchProducts();
          this.showAndCloseModal('isEditing');
          this.showAndCloseModal('addDisplay');
        }
        if (data.status === 400) this.errHandler(data.message);
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  };

  deleteProductHandler = () => {
    const productId = this.state.confirmToDeleteId;
    fetch(`/api/v1/product/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          Toast.fire({
            icon: 'success',
            title: 'Deleted successfully',
          });
          this.setState((prevState) => ({
            products: prevState.products.filter(
              (product) => product.id !== productId
            ),
            confirmDisplay: false,
          }));
        }
      })
      .catch((err) => {
        if (err.status === 500) window.location.href = '/error';
      });
  };

  errHandler = (err) => {
    this.setState({ errMessage: err });
  };

  handleState = (name, id) => {
    this.setState({ [name]: id });
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
      confirmDisplay,
      cart,
      isEditing,
      currentProduct,
    } = this.state;

    return (
      <Router>
        <div
          className={
            addDisplay || loginDisplay || confirmDisplay ? 'root-container' : ''
          }
        >
          {isLoading && <div>Loading...</div>}
          {loginDisplay && (
            <LoginForm
              isLoggedIn={isLoggedIn}
              showAndCloseModal={this.showAndCloseModal}
            />
          )}
          {addDisplay && (
            <AddProductForm
              handleState={this.handleState}
              currentProduct={currentProduct}
              isEditing={isEditing}
              errHandler={this.errHandler}
              addProductHandler={this.addProductHandler}
              categories={categories}
              showAndCloseModal={this.showAndCloseModal}
              updateProductHandler={this.updateProductHandler}
            />
          )}
          {confirmDisplay && (
            <ConfirmModal
              deleteProductHandler={this.deleteProductHandler}
              showAndCloseModal={this.showAndCloseModal}
            />
          )}
          <Navbar
            handleChange={this.handleChange}
            searchWords={searchWords}
            isLoggedIn={isLoggedIn}
            showAndCloseModal={this.showAndCloseModal}
            cart={cart}
          />
          {isLoading && <div>Loading...</div>}

          <Switch>
            <Route path="/cart">
              <ListofCardproducts
                cart={cart}
                incretmentQun={this.incretmentQunPrice}
                decretmentQun={this.decretmentQunPrice}
                deleteCartProcuct={this.deleteCartProcuct}
                removeAllItem = {this.removeAllItem}
              />
            </Route>
            <Route path="/product/:id" component={ProductDetails} />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  categories={categories}
                  showAndCloseModal={this.showAndCloseModal}
                  isLoggedIn={isLoggedIn}
                  handleChange={this.handleChange}
                  categorySelected={categorySelected}
                  sort={sort}
                  searchWords={searchWords}
                  products={products}
                  confirmDisplay={confirmDisplay}
                  handleState={this.handleState}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route path='*' render={() => (
              <NotFound isNotFoundPage={true} />
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
