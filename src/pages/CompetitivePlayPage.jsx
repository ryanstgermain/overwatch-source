import React, { Component } from 'react';
import Overview from '../components/competitive_play/Overview';
import RulesAndScoring from '../components/competitive_play/RulesAndScoring';
import Ranking from '../components/competitive_play/Ranking';
import Top500 from '../components/competitive_play/Top500';
import Seasons from '../components/competitive_play/Seasons';

class CompetitivePlayPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <RulesAndScoring />
        <Ranking />
        <Top500 />
        <Seasons />
      </>
    );
  }
}

export default CompetitivePlayPage;