import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Overview = () => {
  return (
    <div>
      <h1 className='hero-list-overview-title'>Overwatch Game Modes</h1>
      <div className='section-hero-list'>
        <div className='section-left'>
          <Link to='/overwatch-competitive-play'>
            <Divider className='divider-mobile-hidden' />
            <div className='home-data'>
              <span className='home-data-font'>Competitive Play</span>
            </div>  
          </Link>
          <p className='game-mode-overview'>
            <strong>T</strong>here are currently 7 different game modes in Overwatch. 
            Competitive and quick play has 4 game modes being assault, escort, control, and 
            hybrid. Arcade has 3 game modes being capture the flag, deathmatch, and elimination.
            Read more about all the different game modes below. 
          </p>
        </div>
        <div className='section-right'>
          <div>
            <Link to='/overwatch-heroes'>
              <Divider className='divider-mobile-hidden' />
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Heroes</span>
              </div>  
            </Link>
            <Link to='/overwatch-maps'>
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Maps</span>
              </div>  
            </Link>
            <Link to='/overwatch-career-stats'>
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Career Stats</span>
              </div>  
            </Link>
            <Link to='/overwatch-league'>
              <div className='home-data'>
                <span className='home-data-font'>Overwatch League Data</span>
              </div>  
              <Divider className='divider-mobile-hidden' />
            </Link> 
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Overview;