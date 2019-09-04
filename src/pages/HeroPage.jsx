import React, { Component } from 'react';
import HeroTitleAndImage from '../components/heros/individual/HeroTitleAndImage';
import HeroInfo from '../components/heros/individual/HeroInfo';
import AboutHero from '../components/heros/individual/AboutHero';
import WeaponInfo from '../components/heros/individual/WeaponInfo';
import AbilityInfo from '../components/heros/individual/AbilityInfo';
import HeroVideo from '../components/heros/individual/HeroVideo';
import { Divider } from 'semantic-ui-react';

class HeroPage extends Component {
  render() {
    return (
      <div className='individual-hero-layout'>
        <Divider section hidden />
        <div className='individual-hero-upper'>
          <HeroTitleAndImage />
          <HeroInfo />  
        </div>
        <div>
          <AboutHero />
          <Divider section hidden />
          <WeaponInfo />
          <Divider section hidden />
          <AbilityInfo />
          <Divider section hidden />
          <HeroVideo />  
        </div>
        <Divider section hidden />
      </div>
    );
  }
}

export default HeroPage;