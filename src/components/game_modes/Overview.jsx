import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Overview = () => {
  return (
    <div>
      <h1 className='hero-list-overview-title'>All Overwatch Game Modes</h1>
      <div className='section-hero-list'>
        <div className='section-left'>
          <p className='hero-overview'>
            <strong></strong>
          </p>
        </div>
        <div className='section-right'>
          <div>
            <Link to='/overwatch-heros'>
              <Divider className='divider-mobile-hidden' />
              <div className='home-data'>
                <span className='home-data-font'>Overwatch Heros</span>
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