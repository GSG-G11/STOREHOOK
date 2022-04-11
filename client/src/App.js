import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Listofproducts from './Components/Cart/Listofproducts';
import Login from './Components/Forms/LoginForm';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state ={
    products: [],
    
  }
  componentDidMount(){
    fetch('/api/v1/products').then(data => data.json()).then((data) => console.log(data)).catch(console.log)
  }
  render() {
    return (
        <Router>
          <div>
          <Navbar />
          <Switch>
          <Route path="/login">
              <Login list={'login'} />
          </Route>
          <Route path="/cart">
              <Listofproducts list={'test'} />
          </Route>
          <Route path="/">
              <Listofproducts list={'home'} />
          </Route>
          </Switch>
          </div>

        </Router>

    );
  }
}
export default App;
