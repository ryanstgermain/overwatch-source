import React from 'react';
import { Divider } from 'semantic-ui-react';

const Role = () => {
  return (
    <div>
      <h2 className='maps-used'>Roles</h2>
      <Divider hidden />
      <div className='about-overwatch-section'>
        <div className='tank'>
          <h3 className='about-overwatch-section-heading'>Tank</h3>
          <p className='about-overwatch-section-paragraph'>
            Tank heroes are known for their high amount of health and tough shields. Tank heroes 
            play a huge part in the team as they help with providing cover, leading the team, 
            and creating space.
          </p>
        </div>
        <div className='damage'>
          <h3 className='about-overwatch-section-heading'>Damage</h3>
          <p className='about-overwatch-section-paragraph'>
            Damage heroes have one job; kill. Their health may be low but their strong weapons 
            make up for it. Damage heroes rely a lot on support heroes to keep them on point.
          </p>
        </div>
        <div className='support'>
          <h3 className='about-overwatch-section-heading'>Support</h3>
          <p className='about-overwatch-section-paragraph'>
            Support heroes are probably the most important category of hero. They are what keeps 
            the team alive while they are pushing a payload or capturing the enemy point. Support 
            heroes can also boost damage and provide more shields.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Role;