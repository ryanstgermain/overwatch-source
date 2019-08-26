import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Overview = () => {
  return (
    <div>
      <h1 className='hero-list-overview-title'>All Overwatch Maps</h1>
      <div className='section-hero-list'>
        <div className='section-left'>
          <p className='hero-overview'>
            <strong>T</strong>here are 28 different maps in Overwatch. Currently, 
            standard gameplay has and array of 21 different maps used for quick and 
            competitive play. Being the biggest maps in the game, there are 5 assault 
            maps, 6 escort maps, 5 hybrid maps, and 5 control maps. The remaining 7 
            maps are smaller, used for arcade game modes. Some arcade maps are modified, 
            smaller versions of standard maps and during seasonal events, other maps are 
            themed differently to fit that time of year.
          </p>
        </div>
        <div className='section-right'>
          <div>
            <Link to='/overwatch-heros'>
              <Divider className='divider-hidden' />
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Heros</span>
              </div>  
            </Link>
            <Link to='/overwatch-game-modes'>
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Game Modes</span>
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
              <Divider className='divider-hidden' />
            </Link> 
          </div>
        </div>    
      </div>
    </div> 
  );
}

export default Overview;