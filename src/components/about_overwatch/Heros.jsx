import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Heros = () => {
  return (
    <div>
      <h2 className='maps-used'>Heros</h2>
      <Divider hidden />
      <div className='about-overwatch-overview-align'>
        <p className='about-overwatch-overview'>
          There's a hero for everyone. With an empressive list of 31 different heros, Blizzard 
          knows how to make their players happy. Whether you like huge explosions or just want 
          to be quiet and sneaky, you have variety. Each hero has their own special weapons and 
          abilities, you will find out that certain heros don't mix well with others so it's up 
          to you to find the perfect team and fight to victory.
        </p>
        <p className='about-overwatch-overview'>
          You can view all of the heros that are in game by clicking the button below.
        </p>
      </div>
      <Divider hidden />
      <div className='button-container'>
        <div className='button-width'>
            <Link to='/overwatch-heros'>
            <div className='about-game-mode-button'>
              <span className='home-data-font'>Overwatch Heros</span>
            </div>  
            </Link>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default Heros;