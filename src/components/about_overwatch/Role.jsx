import React from 'react';
import { Divider } from 'semantic-ui-react';

const Role = () => {
  return (
    <div>
      <h2 className='maps-used'>Role</h2>
      <Divider hidden />
      <div className='about-overwatch-section'>
        <div className='tank'>
          <h3 className='about-overwatch-section-heading'>Tank</h3>
          <p className='about-overwatch-section-paragraph'>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
        <div className='damage'>
          <h3 className='about-overwatch-section-heading'>Damage</h3>
          <p className='about-overwatch-section-paragraph'>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
        <div className='support'>
          <h3 className='about-overwatch-section-heading'>Support</h3>
          <p className='about-overwatch-section-paragraph'>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Role;