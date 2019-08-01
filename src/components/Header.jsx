import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-title'>
          <h1>
            <Link to='/'>Overwatch Source</Link>
          </h1>  
        </div>
        <ul className='header-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/overwatch-about'>About Overwatch</Link>
          </li>
          <li>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
      </div> 
    </div>
  );
}

export default Header;