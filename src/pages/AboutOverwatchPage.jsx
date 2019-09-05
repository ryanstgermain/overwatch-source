import React, { Component } from 'react';
import Overview from '../components/about_overwatch/Overview';
import Gameplay from '../components/about_overwatch/Gameplay';
import Videos from '../components/about_overwatch/Videos';

class AboutOverwatchPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <Gameplay />
        <Videos />
      </>
    );
  }
}

export default AboutOverwatchPage;