import React from 'react';
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
    </div>
  );
}

export default Deathmatch;