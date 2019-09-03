import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

const src = 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/94/Kings_Row_003.jpg/1600px-Kings_Row_003.jpg?version=5f0192e2b912bcd56b8cdacff9b0876c'

const MapScreenshots = () => {
  return (
    <div className='map-screenshot-layout'>
      <h2 className='maps-used'>Screenshots</h2>
      <Divider />
      <Image.Group className='map-screenshot-align' size='medium'>
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
      </Image.Group>
      <Divider section hidden />
    </div>
  );
}

export default MapScreenshots;