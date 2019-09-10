import React from 'react';
import { Divider } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

const Videos = () => {
  return (
    <div className='video-section'>
      <h2 className='maps-used'>Videos about Overwatch</h2>
      <Divider hidden />
      <div className='section-hero-list'>
        <div className='video-player-about-game'>
          <ReactPlayer url='https://www.youtube.com/watch?v=zsih8_-nvqY' controls />  
        </div>
        <div className='video-player-about-game'>
          <ReactPlayer url='https://www.youtube.com/watch?v=q_lrilSEqOE' controls />  
        </div>
      </div>
    </div>
  );
}

export default Videos;