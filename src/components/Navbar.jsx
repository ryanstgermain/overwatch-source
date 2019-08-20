import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <ul className='nav-list'>
        <li>
          <Link to='/' className='nav-link-font'>Home</Link>
        </li>
        <li>
          <Link to='/overwatch-about' className='nav-link-font'>About Overwatch</Link>
        </li>
        <li>
          <Link to='/about-us' className='nav-link-font'>About Us</Link>
        </li>
        <li>
          <Link to='/contact-us' className='nav-link-font'>Contact</Link>
        </li>
      </ul>
  );
}

export default Navbar;