import React from 'react';
import { Divider } from 'semantic-ui-react';

const AbilityInfo = () => {
  return (
    <div>
      <Divider section hidden />
      <div className='section-competitive weapons-section'>
        <div className='hero-info-margin-top'>
          <h2 className='maps-used'>Ability</h2>
          <Divider />
          <h3 className='hero-stat-text'>ability title</h3>
        </div>
        <div className='hero-info-margin-top'>
          <h2 className='maps-used'>Ability Stats</h2>
          <Divider />
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Type:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Health:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Damage:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Ammo:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Duration:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Cooldown:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Headshot:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
        </div>
        <div className='weapon-details'>
          <h2 className='maps-used'>Ability Details</h2>
          <Divider className='divider-mobile-hidden' />
          <p className='hero-bio-text'>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </p>
          <Divider className='divider-mobile-hidden' />
        </div>
      </div>
    </div>
  );
}

export default AbilityInfo;