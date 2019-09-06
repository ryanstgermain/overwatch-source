import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Maps = () => {
  return (
    <div>
      <h2 className='maps-used'>Maps</h2>
      <Divider hidden />
      <div className='about-overwatch-overview-align'>
        <p className='about-overwatch-overview'>
          Be able to travel all over the world with over 28 different maps in the game. 
          Each map tells a story and has their own special features. Each map has a 
          different strategy and layout so it's up to you how to find out by playing the 
          game.
        </p>
        <p className='about-overwatch-overview'>
          You can view all of the maps that are in game by clicking the button below.
        </p>
      </div>
      <Divider hidden />
      <div className='button-container'>
        <div className='button-width'>
            <Link to='/overwatch-maps'>
            <div className='about-game-mode-button'>
              <span className='home-data-font'>Overwatch Maps</span>
            </div>  
            </Link>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default Maps;