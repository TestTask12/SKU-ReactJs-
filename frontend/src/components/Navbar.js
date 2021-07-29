import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import './Navbar.scss';


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
       <a className='nav-link' href='#!' onClick={logout}>Logout</a>
    </li>
  );
  return (
    <div className="gfg">
    <Fragment>
      <nav className='navbar'>
        <Link className='navbar-brand' to='/'>Shopping App</Link>
        <Link className='navbar-brand' to='/'>Product</Link>
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
              <Link className='nav-link' to='/'>Cart</Link>
            </li>
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        {/* </div> */}
      </nav>
      <hr class='my-4' />
    </Fragment>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);