import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Loader from 'react-loader-spinner'

class HeroThumbnail extends Component {
  constructor(){
    super()
      this.state = {
        heros: [],
        hero: [],
        hero_name: '',
        hero_image: '',
        hero_thumbnail: '',
        hero_quote: '',
        hero_real_name: '',
        hero_age: '',
        hero_nationality: '',
        hero_voice: '',
        hero_role: '',
        hero_occupation: '',
        hero_health: '',
        hero_bio: '',
        hero_video: '',
        weapon_name: '',
        weapon_type: '',
        weapon_info: '',
        weapon_damage: '',
        weapon_projectile_speed: '',
        weapon_rof: '',
        weapon_ammo: '',
        weapon_reload_time: '',
        weapon_headshot: '',
        ability_name: '',
        ability_type: '',
        ability_info: '',
        ability_health: '',
        ability_damage: '',
        ability_ammo: '',
        ability_duration: '',
        ability_cooldown: '',
        ability_headshot: '',
        ult_ability_name: '',
        ult_ability_type: '',
        ult_ability_info: '',
        ult_ability_health: '',
        ult_ability_damage: '',
        ult_ability_healing: '',
        ult_ability_duration: '',
        ult_ability_headshot: '',
        ult_ability_cost: '',
        isLoading: false
      }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3000/heros')
      .then(result => result.json())
      .then((data => this.setState({ heros: data, isLoading: false })));
  }
  render(){
    const { heros, isLoading } = this.state;
    if (isLoading) {
      return <div className='loader-align'><Loader type='Grid' color='#FF9D00' height={120} width={120} /></div>
    }
    return (
      <div className='map'>
        {heros.map(hero =>
          <div className='map-padding'>
            <Image onClick={this.props.oneHero} id={hero.id} key={hero.id} src={hero.hero_thumbnail} size='small' className='hero-thumbnail-size' />
            <div onClick={this.props.oneHero} id={hero.id} key={hero.id} className='map-name-container'>
              <span onClick={this.props.oneHero} id={hero.id} key={hero.id} className='map-font'>{hero.hero_name} </span>
              <span onClick={this.props.oneHero} id={hero.id} key={hero.id} className='map-font-type'>- {hero.hero_role}</span>    
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HeroThumbnail;