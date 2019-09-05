import React from 'react';
import { Divider } from 'semantic-ui-react';

const HeroInfo = () => {
  return (
    <div className='hero-stats-layout'>
      <h2 className='maps-used'>Hero Info & Stats</h2>
      <div>
        <Divider />
        <div className='hero-stat-section'>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Real Name:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Age:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Nationality:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Voice:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Role:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Occupation:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Health:</h3>
            <span className='hero-stat-text-result'></span>    
         </div>    
        </div>
        <Divider />    
      </div>
    </div>
  );
}

export default HeroInfo;