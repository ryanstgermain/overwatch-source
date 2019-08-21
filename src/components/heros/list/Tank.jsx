import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Tank = () => {
  return (
    <div className='heros-margin-top'>
      <Divider />
      <h2 className='hero-list-heading'>Tank</h2>
      <div className='align-list-center'>
        <div className='hero-list'>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
          </div>
        </div>    
      </div>
    </div> 
  );
}

export default Tank;