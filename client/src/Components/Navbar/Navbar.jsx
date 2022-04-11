import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import '../Home/home.css';

const Navbar = () => {
  return ( 
      <Router>
      <nav className="navbar navbar-expand-md">
          <Link className="navbar-brand" to="/">Navbar</Link>

          <div className="collapse" id="navbars">
            <form className="form-inline">
              <input className="form-control" type="text" placeholder="Search" />
            </form>

            <ul className="navbar-nav">
              <li className="nav-item icon">
                <Link className="nav-link" to="">
                  <div>
                    <i className='bx bx-bell'></i>
                  </div>
                </Link>
              </li>

              <li className="nav-item icon">
                <Link className="nav-link" to="/cart">
                  <div><span className="prod-cart-num"></span><i className='bx bx-shopping-bag'></i></div>
                </Link>
              </li>

              <li className="nav-item">
                <button className="btn btn-secondary" type="submit">Login</button>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
  );
};

export default Navbar;