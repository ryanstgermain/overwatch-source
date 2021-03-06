import React from 'react';
import { Divider } from 'semantic-ui-react';

const Elimination = () => {
  return (
    <div className='game-mode-upper'>
      <h2 className='map-category-title'>Elimination</h2>
      <div>
        <p className='about-game-mode'>
          There is 1v1 elimination, 3v3 elimination, and 6v6 elimination. There 
          are 3 rounds and once you are killed, you cannot respawn. If you win a 
          round, you cannot use the same hero as the previous round. The team 
          with the most rounds won wins the match.
        </p>
        <Divider />
      </div>
    </div>
  );
}

export default Elimination;