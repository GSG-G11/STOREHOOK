import React from 'react';
import login from '../../../images/login.svg'
import '../Login/login.css'
const Login = (props) => {
  
  return (
    <div className='wrap-login'>
      {props.list}
      <form className='form'>
        <div className='form-group'>
      <h2 className='title'>Welcome, we missed you</h2>
      <i className='bx bx-x'></i>
      </div>
      <img className='img' src={login} alt=""/>
      <h5>Email</h5>
      <div className='icons'>
      <i className='login-icon' class='bx bx-envelope'></i>
      <input type="text" className='email' placeholder="Enter Your Email" />
      </div>
      <h5>Password</h5>
      <div className='icons'>
      <i className='bx bx-lock-alt'></i>
      <input type='password' className='password' placeholder='Enter Your Password'/>
      <i className='bx bx-low-vision'></i>
      </div>
      <br />
      <button type='submit' className='submit'> Login </button>
      </form>
    </div>
  );
};

export default Login;