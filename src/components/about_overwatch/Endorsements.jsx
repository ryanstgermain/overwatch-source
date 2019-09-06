import React from 'react';
import { Divider } from 'semantic-ui-react';

const Endorsements = () => {
  return (
    <div>
      <h2 className='maps-used'>Endorsements</h2>
      <Divider hidden />
      <div className='about-overwatch-overview-align'>
        <p className='about-overwatch-overview'>
          When the match comes to an end, reward 3 players of your choice on either team 
          with an endorsement to remind them of their good teamwork or presence in the match. 
          The 3 different endorsements shown below are what you can give out in the game.
        </p>
        <p className='about-overwatch-overview'>
          Players will start at level 1. Level 5 is the maximum level for endorsements. Giving 
          and receiving endorsements are how you maintain your endorsement level. Otherwise, 
          your level will slowly decay. Leaving games early and being reported will also cause 
          players to lose their rank. You get rewarded with loot boxes based on your current
          level and the higher your level is, the more loot boxes end up in your account.
        </p>
      </div>
      <Divider hidden />
      <div className='about-overwatch-section'>
        <div className='shot-caller'>
          <h3 className='about-overwatch-section-heading'>Shot Caller</h3>
          <span className='about-overwatch-section-paragraph'>Leader, Strategist</span>
        </div>
        <div className='good-teammate'>
          <h3 className='about-overwatch-section-heading'>Good Teammate</h3>
          <span className='about-overwatch-section-paragraph'>Helpful, Effective Communication</span>
        </div>
        <div className='sportsmanship'>
          <h3 className='about-overwatch-section-heading'>Sportsmanship</h3>
          <span className='about-overwatch-section-paragraph'>Positive, Respectful</span>
        </div>
      </div>
    </div>
  );
}

export default Endorsements;