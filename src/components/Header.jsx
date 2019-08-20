import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>
          <Link to='/' className='header-title-font'>Overwatch Source</Link>
          <Divider fitted />
        </h1>  
      </div>
    </div> 
  );
}

export default Header;