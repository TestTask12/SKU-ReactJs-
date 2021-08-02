import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import './Navbar.scss';
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";


const Navbar = ({ logout, isAuthenticated }) => {
  //console.log('isAuthenticated ==>> ', isAuthenticated);
  const guestLinks = () => (
    <Fragment>
        <li className='nav-item'>
          <Link clLinkssName='nav-link' to='/login'>Login</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/signup'>Sign Up</Link>
        </li>
    </Fragment>

  );

  const authLinks = () => (
    <li className='nav-item'>
       <Link className='nav-link' to="/" onClick={logout}>Logout</Link>
    </li>
  );
  return (
    <div className="logo">
    <Fragment>
      <nav className='navbar'>
        <Link className='navbar-brand' to='/'>Shopping App</Link>
        <Link className='navbar-brand' to='/product'>Product</Link>
        <button 
        className='navbar-toggler' 
        type='button' 
        data-toggle='collapse' 
        data-target='#navbarNav' 
        aria-controls='navbarNav' 
        aria-expanded='false' 
        aria-label='Toggle navigation'
        >
        <span className='navbar-toggler-icon'></span>
        </button>
        {/* <div className='collapse navbar-collapse' id='navbarNav'> */}
          <ul className='navbar-nav'>
            <li className='nav-item active'>
            <i className="fa fa-search"></i>
              <Link className="fa fa-shopping-cart" aria-hidden="true"></Link><br></br>

            </li>
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        {/* </div> */}
      </nav>
      <hr className='my-4' />
    </Fragment>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);