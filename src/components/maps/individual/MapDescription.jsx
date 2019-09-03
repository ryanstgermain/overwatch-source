import React from 'react';
import { Divider } from 'semantic-ui-react';

const MapDescription = () => {
  return (
    <div className='map-description-layout'>
      <div>
        <h2 className='maps-used'>Map Description</h2>
        <Divider className='divider-mobile-hidden' />    
      </div>
      <div className='map-description-align-center'>
        <p className='map-description'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>    
      </div>
    </div>
  );
}

export default MapDescription;