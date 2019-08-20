import React, { Component } from 'react';
import HomeBanner from '../components/home/HomeBanner';
import HomeSearch from '../components/home/HomeSearch';
import HomeThumbnails from '../components/home/HomeThumbnails';

class HomePage extends Component {
  render() {
    return (
      <>
        <HomeBanner />
        <HomeSearch />
        <HomeThumbnails />
      </>
    );
  }
}

export default HomePage;