import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Deathmatch = () => {
  return (
    <div className='game-mode-lower'>
      <h2 className='map-category-title'>Deathmatch</h2>
      <div>
        <p className='about-game-mode'>
          Players can choose a free for all style death match where the first 
          player to 20 points wins the match. There is also a team deathmatch 
          style where 2 teams of 4 play against each other to fight for victory. 
          The first team to 30 points wins the match.
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

export default Deathmatch;