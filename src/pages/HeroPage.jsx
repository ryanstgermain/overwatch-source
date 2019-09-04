import React, { Component } from 'react';
import HeroTitleAndImage from '../components/heros/individual/HeroTitleAndImage';
import HeroInfo from '../components/heros/individual/HeroInfo';
import AboutHero from '../components/heros/individual/AboutHero';
import WeaponInfo from '../components/heros/individual/WeaponInfo';
import AbilityInfo from '../components/heros/individual/AbilityInfo';
import HeroVideo from '../components/heros/individual/HeroVideo';

class HeroPage extends Component {
  render() {
    return (
      <>
        <div>
          <HeroTitleAndImage />
          <HeroInfo />  
        </div>
        <AboutHero />
        <WeaponInfo />
        <AbilityInfo />
        <HeroVideo />
      </>
    );
  }
}

export default HeroPage;