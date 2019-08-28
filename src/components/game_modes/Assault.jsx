import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Assault = () => {
  return (
    <div className='game-mode-upper'>
      <h2 className='map-category-title'>Assault</h2>
      <div>
        <p className='about-game-mode'>
          An attacking team must capture points A and B on the map before the time runs out. 
          If the attacking team cannot capture both points, the defending team wins. Once the 
          first point has been captured, extra time is given. If the time runs out while the 
          attacking team is on the point, overtime will play into effect.
        </p>
        <Divider />
      </div>
      <div>
        <h3 className='maps-used'>Maps Used:</h3>
        <div>
          <Divider />
          <Link to='/map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
          <Link to='/map'>
            <h4 className='mode-map-list'>Horizon Lunar Colony</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Assault;