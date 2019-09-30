import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Image, Divider } from 'semantic-ui-react';

class HeroPage extends Component {
  render() {
    return (
      this.props.hero.map(hero => {
        return (
          <div className='individual-hero-layout'>
            <Divider section hidden />
            <div className='individual-hero-upper'>
              <div className='hero-title-image'>
                <h2 className='maps-used'>{hero.hero_name}</h2>
                <Divider />
                <Image src={hero.hero_image} className='hero-image-size' />
                <Divider />
              </div>
              <div className='hero-stats-layout'>
                <h2 className='maps-used'>Hero Info & Stats</h2>
                <div>
                  <Divider />
                  <div className='hero-stat-section'>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Real Name:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_real_name}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Age:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_age}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Nationality:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_nationality}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Voice:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_voice}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Role:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_role}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Occupation:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_occupation}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Health:</h3>
                      <span className='hero-stat-text-result'>{hero.hero_health}</span>    
                  </div>    
                  </div>
                  <Divider />    
                </div>
              </div> 
            </div>
            <div>
              <div className='about-hero-layout'>
                <span className='hero-quote-text'>"{hero.hero_quote}"</span>
                <Divider hidden />
                <h2 className='maps-used'>Hero Bio</h2>
                <Divider hidden />
                <div className='hero-bio-text'>
                  <p>{hero.hero_bio}</p>
                </div>
              </div>
              <Divider section hidden />
              <div className='video-section'>
                <div className='hero-video-center'>
                  <ReactPlayer url={hero.hero_video} controls />  
                </div>
                <Divider hidden />
              </div>
              <Divider section hidden />
              <div>
                <Divider section hidden />
                <div className='section-competitive weapons-section'>
                  <div className='hero-info-margin-top'>
                    <h2 className='maps-used'>Weapon</h2>
                    <Divider />
                    <h3 className='hero-stat-text'>{hero.weapon_name}</h3>
                  </div>
                  <div className='hero-info-margin-top'>
                    <h2 className='maps-used'>Weapon Stats</h2>
                    <Divider />
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Type:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_type}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Damage:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_damage}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Projectile Speed:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_projectile_speed}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Rate of Fire:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_rof}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Ammo:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_ammo}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Reload Time:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_reload_time}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Headshot:</h3>
                      <span className='hero-stat-text-result'>{hero.weapon_headshot}</span>    
                    </div>
                  </div>
                  <div className='weapon-details'>
                    <h2 className='maps-used'>Weapon Details</h2>
                    <Divider className='divider-mobile-hidden' />
                    <p className='hero-bio-text'>{hero.weapon_info}</p>
                    <Divider className='divider-mobile-hidden' />
                  </div>
                </div>
              </div>
              <Divider section hidden />
              <div>
                <Divider section hidden />
                <div className='section-competitive weapons-section'>
                  <div className='hero-info-margin-top'>
                    <h2 className='maps-used'>Ability</h2>
                    <Divider />
                    <h3 className='hero-stat-text'>{hero.ability_name}</h3>
                  </div>
                  <div className='hero-info-margin-top'>
                    <h2 className='maps-used'>Ability Stats</h2>
                    <Divider />
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Type:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_type}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Health:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_health}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Damage:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_damage}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Ammo:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_ammo}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Duration:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_duration}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Cooldown:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_cooldown}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Headshot:</h3>
                      <span className='hero-stat-text-result'>{hero.ability_headshot}</span>    
                    </div>
                  </div>
                  <div className='weapon-details'>
                    <h2 className='maps-used'>Ability Details</h2>
                    <Divider className='divider-mobile-hidden' />
                    <p className='hero-bio-text'>{hero.ability_info}</p>
                    <Divider className='divider-mobile-hidden' />
                  </div>
                </div>
              </div>
              <Divider section hidden />
              <div>
                <Divider section hidden />
                <div className='section-competitive weapons-section'>
                  <div className='hero-info-margin-top'>
                    <h2 className='maps-used'>Ultimate Ability</h2>
                    <Divider />
                    <h3 className='hero-stat-text'>{hero.ult_ability_name}</h3>
                  </div>
                  <div className='hero-info-margin-top'>
                    <h2 className='maps-used'>Ultimate Ability Stats</h2>
                    <Divider />
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Type:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_type}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Damage:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_damage}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Health:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_health}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Healing:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_healing}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Duration:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_duration}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Headshot:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_headshot}</span>    
                    </div>
                    <div className='hero-stats'>
                      <h3 className='hero-stat-text'>Cost:</h3>
                      <span className='hero-stat-text-result'>{hero.ult_ability_cost}</span>    
                    </div>
                  </div>
                  <div className='weapon-details'>
                    <h2 className='maps-used'>Ultimate Ability Details</h2>
                    <Divider className='divider-mobile-hidden' />
                    <p className='hero-bio-text'>{hero.ult_ability_info}</p>
                    <Divider className='divider-mobile-hidden' />
                  </div>
                </div>
                <Divider section hidden />
              </div>
            </div>
          </div>
        );  
      })
    )
  }
}

export default HeroPage;