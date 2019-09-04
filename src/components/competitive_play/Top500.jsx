import React from 'react';

const Top500 = () => {
  return (
    <div className='competitive-section'>
      <div className='competitive-ranking'>
        <h2 className='maps-used'>Top 500</h2> 
        <div>
          <p className='about-game-mode'>
            During each season, if a player is able to 
            make it to top 500 of all players within their 
            region, they will achieve heroic status, a 
            special icon, and a special animated spray. If
            the player has not played 50 or more games in 
            that season. they are unable to reach heroic 
            status. Players are required to have Blizzard's 
            SMS protect feature enabled to be eligible for 
            top 500. The minimun rank eligible for top 500 
            is the Diamond rank (3000 SR). Also, if you don't 
            play a competitive match for 7 days in a row, you 
            will eventually fall out of top 500 and your SR 
            will slowly go down.
          </p>
        </div> 
      </div>
    </div>
  );
}

export default Top500;