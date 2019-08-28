import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Hybrid = () => {
  return (
    <div className='game-mode-upper'>
      <h2 className='map-category-title'>Hybrid</h2>
      <div>
        <p className='about-game-mode'>
          Hybrid is a combination of assault and escort. The attacking team must 
          capture objective A and push a payload to the finsh. The same rules follow 
          with capturing the point as well as pushing the payload. Each map has 2 to 
          3 checkpoints.
        </p>
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
          <Link to='/overwatch-map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hybrid