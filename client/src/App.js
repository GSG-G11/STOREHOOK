import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ProductsList, ListofCardproducts } from './Components';
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

  addToCart = (product) => {
    const { cart } = this.state;
    let newpord;

    console.log(product , 'dadf');

    cart.map((pro) => {
    if(pro.id === product.id){
      pro.quantity += 1
      pro.totalPrice += pro.price
      newpord = pro;
      return newpord;
    }
      return pro
    })

    if(!newpord){
      cart.push({...product , quantity: 1, totalPrice: product.price })
    }

    this.setState({cart: cart})
    localStorage.setItem('cart', JSON.stringify(cart))
  }


  decretmentQunPrice = (id) => {
    const { cart } = this.state;
    cart.forEach((pro) => {
      if(pro.id === id){
        pro.quantity -= 1
        pro.totalPrice -= pro.price
        this.setState({cart: cart})
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    })
  }

  incretmentQunPrice = (id) => {
    const { cart } = this.state;
    cart.forEach((pro) => {
      if(pro.id === id){
        pro.quantity += 1
        pro.totalPrice += pro.price
        this.setState({cart: cart})
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    })
  }
  deleteCartProcuct = (id) => {
    const cartarr = JSON.parse(localStorage.getItem('cart')).filter((pro) => pro.id !== id)
    this.setState({cart : cartarr})
    localStorage.setItem('cart', JSON.stringify(cartarr))
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

  render() {
    const { products, isLoggedIn, isLoading, cart } = this.state;
    return (
      <Router>
        <div>
          <Navbar
            isLoggedIn={isLoggedIn}
            showLoginModal={this.showAndCloseModal}
            cart={cart}
          />
          {isLoading && <div>Loading...</div>}

          <Switch>
            <Route path="/cart">
              <ListofCardproducts cart={cart} incretmentQun= {this.incretmentQunPrice} decretmentQun= {this.decretmentQunPrice} deleteCartProcuct={this.deleteCartProcuct}/>
            </Route>
            <Route exact path="/">
              <ProductsList products={products} isLoggedIn={isLoggedIn} addToCart={this.addToCart}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
