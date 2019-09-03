import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

const MapCriticalInfo = () => {
  return (
    <div className='map-critical-layout'>
      <div className='map-title-image'>
        <h2 className='maps-used'>Map Title</h2>
        <Divider className='divider-mobile-hidden' />
        <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='large' />
        <Divider className='divider-mobile-hidden' />
      </div>
      <div className='map-critical-info'>
        <div>
          <h3 className='maps-used'>Location</h3>
          <span className='home-font'>United States</span>    
        </div>
        <Divider />
        <div>
          <h3 className='seasonal-maps-used'>Type</h3>
          <span className='home-font'>Escort</span>   
        </div>
      </div>
    </div>
  );
}

export default MapCriticalInfo;