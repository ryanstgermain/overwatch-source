import React, { Component } from 'react';
import Overview from '../components/game_modes/Overview';
import Assault from '../components/game_modes/Assault';
import Control from '../components/game_modes/Control';
import Escort from '../components/game_modes/Escort';
import Hybrid from '../components/game_modes/Hybrid';
import CaptureTheFlag from '../components/game_modes/CaptureTheFlag';
import Deathmatch from '../components/game_modes/Deathmatch';
import Elimination from '../components/game_modes/Elimination';
import Seasonal from '../components/game_modes/Seasonal';

class GameModeListPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <Assault />
        <Control />
        <Escort />
        <Hybrid />
        <CaptureTheFlag />
        <Deathmatch />
        <Elimination />
        <Seasonal />
      </>
    );
  }
}

export default GameModeListPage;