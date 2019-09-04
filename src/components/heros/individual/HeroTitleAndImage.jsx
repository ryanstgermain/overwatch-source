import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

const HeroTitleAndImage = () => {
  return (
    <div className='hero-title-image'>
      <h2 className='maps-used'>Hero title</h2>
      <Divider />
      <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/18/Symmetra-portrait.png/552px-Symmetra-portrait.png?version=b79231a468b788ae00d60f01d2e4f2a3' size='small' />
      <Divider />
    </div>
  );
}

export default HeroTitleAndImage;