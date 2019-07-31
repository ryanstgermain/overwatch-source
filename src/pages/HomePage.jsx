import React, { Component } from 'react';
import HomeBanner from '../components/home/HomeBanner';
import HomeButton from '../components/home/HomeButton';
import HomeThumbnails from '../components/home/HomeThumbnails'

class HomePage extends Component {
  render() {
    return (
      <>
        <HomeBanner />
        <HomeButton />
        <HomeThumbnails />
      </>
    );
  }
}

export default HomePage;