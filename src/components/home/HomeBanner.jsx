import React from 'react';
import { Container, Divider } from 'semantic-ui-react'

const HomeBanner = () => {
  return (
    <div className='home-banner'>
      <h2 className='test'>Welcome to Overwatch Source</h2>
      <Divider hidden />
      <span className='home-banner-font'>Your #1 online dashboard for Overwatch fans.</span>
    </div>
  );
}

export default HomeBanner;