import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const CaptureTheFlag = () => {
  return (
    <div className='game-mode-lower'>
      <h2 className='map-category-title'>Capture the Flag</h2>
      <div>
        <p className='about-game-mode'>
          A flag on each side of the map is set near both spawns. The goal is 
          to steal the flag from the enemy side and bring it back to your spawn 
          while making sure the enemy team does not capture any flags. The first 
          team to 3 points wins the match.
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
        </div>
      </div>
    </div>
  );
}

export default CaptureTheFlag;