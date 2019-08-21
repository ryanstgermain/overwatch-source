import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>
          <Link to='/' className='header-title-font'>Overwatch Source</Link>
        </h1>  
      </div>
    </div> 
  );
}

export default Header;