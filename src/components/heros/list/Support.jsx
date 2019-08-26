import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Support = () => {
  return (
    <div>
      <Divider />
      <h2 className='hero-list-heading'>Support</h2>
      <div className='align-list-center'>
        <div className='hero-list'>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
          <div className='hero'>
            <Link to='/hero'>
              <Image src='https://upload.wikimedia.org/wikipedia/en/4/4c/Hanzo_Overwatch.png' size='small' />    
            </Link>
            <span className='hero-font'>Hanzo</span>    
            <Divider />
          </div>
        </div>
      </div>
      <Divider section hidden />    
    </div> 
  );
}

export default Support;