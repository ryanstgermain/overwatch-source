import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Overview = () => {
  return (
    <div>
      <h1 className='hero-list-overview-title'>Overwatch Competitive Play</h1>
      <div className='section-competitive-overview'>
        <p className='hero-overview'>
          <strong>T</strong>here are 28 different maps in Overwatch. Currently, 
          standard gameplay has and array of 21 different maps used for quick and 
          competitive play. Being the biggest maps in the game, there are 5 assault 
          maps, 6 escort maps, 5 hybrid maps, and 5 control maps. The remaining 7 
          maps are smaller, used for arcade game modes. Some arcade maps are modified, 
          smaller versions of standard maps and during seasonal events, other maps are 
          themed differently to fit that time of year.
        </p>
      </div>
    </div> 
  );
}

export default Overview;