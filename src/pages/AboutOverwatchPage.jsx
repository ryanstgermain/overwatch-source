import React, { Component } from 'react';
import Overview from '../components/about_overwatch/Overview';
import Gameplay from '../components/about_overwatch/Gameplay';
import Videos from '../components/about_overwatch/Videos';
import { Divider } from 'semantic-ui-react';

class AboutOverwatchPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <Divider section />
        <Gameplay />
        <Divider section hidden />
        <Videos />
        <Divider section hidden />
      </>
    );
  }
}

export default AboutOverwatchPage;