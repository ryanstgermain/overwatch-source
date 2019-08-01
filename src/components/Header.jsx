import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <div className='header'>
        <div className='header-title'>
          <h1>
            <Link to='/'>Overwatch Source</Link>
          </h1>  
        </div>
        <ul className='header-links'>
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
      {/* <Route path='/overwatch-about' component={AboutOverwatch} /> */}
      {/* <Route path='/about-us' component={AboutPage} /> */}
      {/* <Route path='/contact-us' component={ContactPage} /> */}
    </Router>
  );
}

export default Header;