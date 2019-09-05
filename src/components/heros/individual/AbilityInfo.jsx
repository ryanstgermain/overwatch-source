import React from 'react';
import { Divider } from 'semantic-ui-react';

const AbilityInfo = () => {
  return (
    <div>
      <Divider section hidden />
      <div className='section-competitive weapons-section'>
        <div>
          <h2 className='maps-used'>Ability</h2>
          <Divider />
          <h3 className='hero-stat-text'>ability title</h3>
        </div>
        <div>
          <h2 className='maps-used'>Ability Stats</h2>
          <Divider />
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Type:</h3>
            <span className='hero-stat-text-result'>ability type</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Health:</h3>
            <span className='hero-stat-text-result'>200</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Damage:</h3>
            <span className='hero-stat-text-result'>20</span>    
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
            <span className='hero-stat-text-result'>True</span>    
          </div>
        </div>
        <div className='weapon-details'>
          <h2 className='maps-used'>Weapon Details</h2>
          <Divider />
          <p className='hero-bio-text'>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </p>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default AbilityInfo;