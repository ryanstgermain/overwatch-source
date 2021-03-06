import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Overview = () => {
  return (
    <div>
      <h1 className='hero-list-overview-title'>Overwatch Heroes</h1>
      <div className='section-hero-list'>
        <div className='section-left'>
          <p className='hero-overview'>
            <strong>T</strong>here are currently 31 playable heroes in Overwatch. 
            Each hero has a weapon/weapons that is unique to them. Abilities are 
            different throughout the hero list as each hero is suitable for 
            different situations (Shift and E keys). Normal abilities do not consume 
            ammunition but do have cooldowns after every use. Passive abilities 
            (abilities that don't cause damage) are seen with a few heroes and can 
            be used instantly. Each hero has an "ultimate ability" that has to be 
            charged and is very powerful (Q key). All heroes have at least 2 abilities, 
            where some have more.
          </p>
        </div>
        <div className='section-right'>
          <div>
            <Link to='/overwatch-maps'>
              <Divider className='divider-mobile-hidden' />
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Maps</span>
              </div>  
            </Link>
            <Link to='/overwatch-game-modes'>
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Game Modes</span>
              </div>  
            </Link>
          </div>
        </div>    
      </div>
    </div> 
  );
}

export default Overview;