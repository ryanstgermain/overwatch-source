import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

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
          <Image src='https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg' size='mini' className='nav-ow-logo' />
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