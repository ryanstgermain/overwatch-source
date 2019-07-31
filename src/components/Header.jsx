import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <div className='header'>
        <div>
          <h1>
            <Link to='/'>Overwatch Source</Link>
          </h1>  
        </div>
        <div>
          <h3>
            <Link to='/about-overwatch'>About Overwatch</Link>
          </h3>
          <h3>
            <Link to='/about-us'>About Us</Link>
          </h3>
          <h3>
            <Link to='/contact-us'>Contact Us</Link>
          </h3>
        </div>
        {/* <Route path='/about-overwatch' component={AboutOverwatch} /> */}
        {/* <Route path='/about-us/' component={AboutPage} /> */}
      </div>  
    </Router>
    
  );
}

export default Header;