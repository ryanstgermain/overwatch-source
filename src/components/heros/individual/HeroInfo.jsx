import React from 'react';
import { Divider } from 'semantic-ui-react';

const HeroInfo = () => {
  return (
    <div className='hero-stats-layout'>
      <h2 className='maps-used'>Hero Info & Stats</h2>
      <div>
        <Divider />
        <div className='test'>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Real Name:</h3>
            <span className='hero-stat-text-result'>hero name</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Age:</h3>
            <span className='hero-stat-text-result'>25</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Nationality:</h3>
            <span className='hero-stat-text-result'>nationality</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Voice:</h3>
            <span className='hero-stat-text-result'>voice name</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Role:</h3>
            <span className='hero-stat-text-result'>Damage</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Occupation:</h3>
            <span className='hero-stat-text-result'>job title</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Health:</h3>
            <span className='hero-stat-text-result'>200</span>    
         </div>    
        </div>
        <Divider />    
      </div>
    </div>
  );
}

export default HeroInfo;