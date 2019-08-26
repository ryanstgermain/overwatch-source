import React from 'react';
import { Divider } from 'semantic-ui-react';

const HomeBanner = () => {
  return (
    <div className='home-banner'>
      <h2 className='text-shadow'>Welcome to Overwatch Source</h2>
      <Divider className='divider-mobile-hidden' hidden />
      <span className='home-banner-font'>Your #1 online dashboard for Overwatch fans.</span>
    </div>
  );
}

export default HomeBanner;