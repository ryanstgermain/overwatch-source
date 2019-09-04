import React, { Component } from 'react';
import Overview from '../components/competitive_play/Overview';
import Ranking from '../components/competitive_play/Ranking';
import Top500 from '../components/competitive_play/Top500';
import Seasons from '../components/competitive_play/Seasons';
import { Divider } from 'semantic-ui-react';

class CompetitivePlayPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <Divider section hidden />
        <Ranking />
        <Divider section />
        <Top500 />
        <Divider section />
        <Seasons />
        <Divider section hidden />
      </>
    );
  }
}

export default CompetitivePlayPage;