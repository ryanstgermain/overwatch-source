import React from 'react';

const Overview = () => {
  return (
    <div>
      <h1 className='hero-list-overview-title'>About Overwatch</h1>
      <div className='about-overwatch-overview-align'>
        <p className='about-overwatch-overview'>
          Overwatch is a video game developed and published by Blizzard Entertainment that is a team-based FPS multiplayer game. 
          Releasing on May 24th, 2016, the game was first avalible for the Xbox One, PLaystation 4, and PC. A Nintendo Switch version 
          is scheduled to release on October 15th, 2019. You can buy the game as a physical copy or as a digital copy 
          on <a href='https://us.shop.battle.net/en-us/product/overwatch?blzcmp=ow_buy_nav' target='_blank' rel='noopener noreferrer'>Blizzard's webiste</a>. 
        </p>
        <p className='about-overwatch-overview'>
          Below you will find more information about the game.
        </p>
      </div>
    </div>
  );
}

export default Overview;