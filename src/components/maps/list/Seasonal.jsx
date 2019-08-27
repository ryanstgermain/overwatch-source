import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Seasonal = () => {
  return (
    <div>
      <div className='map-margin-top'>
        <h2 className='map-category-title'>Seasonal Maps</h2>
        <p className='map-category'>
          During different times of the year, certain maps are changed and redecorated to fit the theme.
        </p>
        <Divider section className='divider-mobile-hidden' />    
      </div>
      
      <Divider section hidden />
    </div>
  );
}

export default Seasonal;