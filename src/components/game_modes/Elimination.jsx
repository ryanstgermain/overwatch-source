import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Elimination = () => {
  return (
    <div className='game-mode-upper'>
      <h2 className='map-category-title'>Elimination</h2>
      <div>
        <p className='about-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        <Divider />
      </div>
      <div>
        <h3 className='maps-used'>Maps Used:</h3>
        <div>
          <Divider />
          <Link to='/overwatch-map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/overwatch-map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/overwatch-map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/overwatch-map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default Elimination;