import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = ({ isLoggedIn, showLoginModal }) => {
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
                <span className="prod-cart-num"></span>
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
