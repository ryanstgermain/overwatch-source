import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-title'>
          <h1>
            <Link to='/' className='header-title-font'>Overwatch Source</Link>
          </h1>  
        </div>
        <ul className='header-links'>
          <li>
            <Link to='/' className='header-link-font'>Home</Link>
          </li>
          <li>
            <Link to='/overwatch-about' className='header-link-font'>About Overwatch</Link>
          </li>
          <li>
            <Link to='/about-us' className='header-link-font'>About Us</Link>
          </li>
          <li>
            <Link to='/contact-us' className='header-link-font'>Contact Us</Link>
          </li>
        </ul>
      </div> 
    </div>
  );
}

export default Header;