import React from 'react';
import { Divider } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

const HeroVideo = () => {
  return (
    <div className='video-section'>
      <div className='hero-video-center'>
        <ReactPlayer url='https://www.youtube.com/watch?v=zsih8_-nvqY' controls />  
      </div>
      <Divider hidden />
    </div>
  );
}

export default HeroVideo;