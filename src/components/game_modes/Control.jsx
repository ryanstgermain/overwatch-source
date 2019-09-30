import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Control = () => {
  return (
    <div className='game-mode-upper'>
      <h2 className='map-category-title'>Control</h2>
      <div>
        <p className='about-game-mode'>
          Two teams battle against each other to capture and hold a point until 100%. 
          Either team has the opportunity to steal the point but it is not possible 
          to steal the point while the other team is on the point at the same time. 
          This game mode does not have a time limit so whoever gets to 100% first, 
          wins the first round.
        </p>
        <Divider />
      </div>
    </div>
  );
}

export default Control;