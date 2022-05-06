import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const navigate = useNavigate();
  // entire state from the store in store/index.js
  // const message = useSelector((state) => {
  //   return state.message;
  // });

  return (
    <div className='chat-navbar'>
      <nav className='chat-navbar-inner'>
        <div className='chat-navbar-inner-left'>
          <button
            onClick={() => navigate(-1)}
            className='btn btn-outline-primary'
          >
            Back
          </button>
          <Link to='/settings' className='btn btn-outline-success ml-2'>
            Settings
          </Link>
        </div>
        <div className='chat-navbar-inner-right'>
          <span className='logged-in-user'>Hi User</span>
          {/* <button
            onClick={() => navigate('/register')}
            className='btn btn-outline-danger ml-2'
          >
            Register
          </button> */}
          <Link to='/' className='btn btn-outline-success ml-2'>
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
