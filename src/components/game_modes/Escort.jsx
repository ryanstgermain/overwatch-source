import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Escort = () => {
  return (
    <div className='game-mode-upper'>
      <h2 className='map-category-title'>Escort</h2>
      <div>
        <p className='about-game-mode'>
          The attacking team must escort the payload to the finish while the 
          defending team tries to stop them from pushing it further. There are 
          2 to 3 checkpoints on each map and once the payload reaches the checkpoint, 
          extra time is given. If the attacking team fails to reach the finish or a 
          checkpoint before the time runs out, the defending team wins. If the attacking 
          team is pushing the payload while the timer runs out, overtime is activated.
        </p>
        <Divider />
      </div>
    </div>
  );
}

export default Escort;