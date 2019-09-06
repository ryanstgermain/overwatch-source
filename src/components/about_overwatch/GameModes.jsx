import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const GameModes = () => {
  return (
    <div>
      <h2 className='maps-used'>Game Modes</h2>
      <Divider hidden />
      <div className='about-overwatch-overview-align'>
        <p className='about-overwatch-overview'>
          With over 5 different game modes, Overwatch players have the option to be very specific with 
          how they want to play. You can even play around with filters via custom game if you're wanting 
          to spice things up or if you're just plain picky. It is recommended to start off with the 
          tutorial to learn the basics before diving straight into the world of Overwatch. 
        </p>
        <p className='about-overwatch-overview'>
          You can view all of the game modes that are in game by clicking the button below.
        </p>
      </div>
      <Divider hidden />
      <div className='button-container'>
        <div className='button-width'>
            <Link to='/overwatch-game-modes'>
            <div className='about-game-mode-button'>
              <span className='home-data-font'>Overwatch Game Modes</span>
            </div>  
            </Link>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default GameModes;