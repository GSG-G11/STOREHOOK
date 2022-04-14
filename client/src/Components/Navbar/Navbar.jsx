import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = ({
  isLoggedIn,
  showAndCloseModal,
  searchWords,
  handleChange,
}) => {
  const logout = () => {
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('user', JSON.stringify({}));
    showAndCloseModal('isLoggedIn');
  };

  let cartarr = localStorage.getItem('cart');
  let sumitem;
  if (cartarr && cartarr.length > 0) {
    sumitem = JSON.parse(cartarr)
      .map((c) => c.quantity)
      .reduce((prev, cur) => prev + cur, 0);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="search">
        <i className="bx bx-search"></i>
        <input
          value={searchWords}
          name="searchWords"
          onChange={handleChange}
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
            <div className="icon-wrap cart-icon">
              <div className="prod-cart-num">{sumitem >= 0 ? sumitem : 0}</div>
              <i className="bx bx-shopping-bag"></i>
            </div>
          </Link>
        </li>

        <li>
          {isLoggedIn ? (
            <button className="btn-login btn-logout" onClick={logout}>
              Logout
            </button>
          ) : (
            <button
              className="btn-login"
              onClick={() => showAndCloseModal('loginDisplay')}
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
