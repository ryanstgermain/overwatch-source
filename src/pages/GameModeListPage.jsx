import React, { Component } from 'react';
import Overview from '../components/game_modes/Overview';
import Assault from '../components/game_modes/Assault';
import Control from '../components/game_modes/Control';
import Escort from '../components/game_modes/Escort';
import Hybrid from '../components/game_modes/Hybrid';
import CaptureTheFlag from '../components/game_modes/CaptureTheFlag';
import Deathmatch from '../components/game_modes/Deathmatch';
import Seasonal from '../components/game_modes/Seasonal';
import Elimination from '../components/game_modes/Elimination';
import { Divider } from 'semantic-ui-react';

class GameModeListPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <Divider section hidden />
        <div className='game-mode-layout'>
          <div className='game-mode-upper-section'>
            <Assault />
            <Control />
            <Escort />
            <Hybrid />
            <Elimination />
          </div>
          <div className='game-mode-lower-section'>
            <Deathmatch />
            <Seasonal />  
            <CaptureTheFlag />  
          </div>  
        </div>
      </>
    );
  }
}

export default GameModeListPage;