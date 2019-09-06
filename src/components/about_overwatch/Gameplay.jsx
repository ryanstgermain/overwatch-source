import React from 'react';
import { Divider } from 'semantic-ui-react';

const Gameplay = () => {
  return (
    <div>
      <h2 className='maps-used'>Gameplay</h2>
      <Divider hidden />
      <div className='about-overwatch-overview-align'>
        <p className='about-overwatch-overview'>
          Overwatch is a 6v6 style game where players fight for victory. 5 different 
          game modes, 28 different maps, and 31 different heros makes the game playable 
          in many different ways so you will never get bored. The leveling system 
          creates an immersive feel for the player so you always have something work for. 
          Loot boxes and portraits are rewards for good gameplay and make you want to 
          come back and keep playing the game.
        </p>
      </div>
    </div>
  );
}

export default Gameplay;