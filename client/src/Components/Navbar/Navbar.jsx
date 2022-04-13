import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = ({ isLoggedIn, showLoginModal }) => {
  let cartarr = localStorage.getItem("cart");
  let sumitem;
  if(cartarr && cartarr.length > 0){
    sumitem = JSON.parse(cartarr).map((c) => c.quantity).reduce((prev, cur) => prev + cur, 0)
  }
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="search">
          <i className="bx bx-search"></i>
          <input
            className="search-input"
            type="search"
            placeholder="Search.."
          />
        </div>

        <ul className="navbar-nav">
          <li>
            <div className="icon-wrap">
              <i className="bx bx-bell"></i>
            </div>
          </li>

          <li>
            <Link to="/cart">
              <div className="icon-wrap">
                <div className="prod-cart-num">{sumitem}</div>
                <i className="bx bx-shopping-bag"></i>
              </div>
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <div>{JSON.stringify(localStorage.getItem('user')).name} </div>
            ) : (
              <button
                className="btn-login"
                onClick={() => showLoginModal('loginDisplay')}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
