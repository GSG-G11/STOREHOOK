import { Component } from 'react';
import login from '../../../images/login.svg';
import './login.css';

class Login extends Component {
  state = {
    showPassword: false,
  };

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  login = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      email: email.value,
      password: password.value,
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', true);
    this.props.showAndCloseModal('isLoggedIn');
    this.props.showAndCloseModal('loginDisplay');
  };

  render() {
    const { showPassword } = this.state;
    const { showAndCloseModal } = this.props;
    return (
      <div className="wrap-login">
        <form onSubmit={this.login} className="form">
          <div className="login-form-group">
            <h2 className="title">Welcome, we missed you</h2>
            <i
              className="bx bx-x"
              onClick={() => showAndCloseModal('loginDisplay')}
            ></i>
          </div>
          <img className="img" src={login} alt="" />
          <h5>Email</h5>
          <div className="icons email">
            <i className="login-icon bx bx-envelope"></i>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <h5>Password</h5>
          <div className="icons">
            <i className="bx bx-lock-alt"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              className="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
            <i
              className={showPassword ? 'bx bx-show-alt' : 'bx bx-low-vision'}
              onClick={this.showPassword}
            ></i>
          </div>
          <br />
          <button type="submit" className="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
