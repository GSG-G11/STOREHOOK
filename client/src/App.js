import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Navbar,
  Home,
  ProductDetails,
  AddProductForm,
  LoginForm,
  ConfirmModal,
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
    confirmToDeleteId: 0,
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

  // alertHandler = (alert, state) => {
  //   return(
  //   <div>
  //     <div className={`alert alert-${state}`}>
  //       <p className='alert-text'>{alert}</p>
  //   </div>)
  // };

  handleIdDelete = (id) => {
    this.setState({ confirmToDeleteId: id });
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
      alertDisplay,
      confirmDisplay,
    } = this.state;
    return (
      <Router>
        <div
          className={
            addDisplay || loginDisplay || confirmDisplay ? 'root-container' : ''
          }
        >
          {isLoading && <div>Loading...</div>}
          {/* {alertDisplay && this.alertHandler} */}
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
          />
          <Switch>
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
                  handleIdDelete={this.handleIdDelete}
                />
              )}
            />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
