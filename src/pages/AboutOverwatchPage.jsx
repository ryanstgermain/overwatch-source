import React, { Component } from 'react';
import Overview from '../components/about_overwatch/Overview';
import Gameplay from '../components/about_overwatch/Gameplay';
import GameModes from '../components/about_overwatch/GameModes';
import Endorsements from '../components/about_overwatch/Endorsements';
import Role from '../components/about_overwatch/Role';
import Heros from '../components/about_overwatch/Heros';
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
        <Endorsements />
        <Divider section hidden />
        <GameModes />
        <Divider section hidden />
        <Role />
        <Divider section hidden />
        <Heros />
        <Divider section hidden />
        <Videos />
        <Divider section hidden />
      </>
    );
  }
}

export default AboutOverwatchPage;