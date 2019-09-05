import React from 'react';
import { Divider } from 'semantic-ui-react';

const WeaponInfo = () => {
  return (
    <div>
      <Divider section hidden />
      <div className='section-competitive weapons-section'>
        <div>
          <h2 className='maps-used'>Weapon</h2>
          <Divider />
          <h3 className='hero-stat-text'>weapon title</h3>
        </div>
        <div>
          <h2 className='maps-used'>Weapon Stats</h2>
          <Divider />
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Type:</h3>
            <span className='hero-stat-text-result'>weapon type</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Damage:</h3>
            <span className='hero-stat-text-result'>20</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Projectile Speed:</h3>
            <span className='hero-stat-text-result'>40 meters per second</span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Rate of Fire:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Ammo:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Reload Time:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
          <div className='hero-stats'>
            <h3 className='hero-stat-text'>Headshot:</h3>
            <span className='hero-stat-text-result'></span>    
          </div>
        </div>
        <div className='weapon-details'>
          <h2 className='maps-used'>Weapon Details</h2>
          <Divider />
          <p className='hero-bio-text'>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          <Divider />
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeaponInfo;