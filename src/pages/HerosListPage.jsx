import React, { Component } from 'react';
import Overview from '../components/heros/list/Overview';
import HeroThumbnail from '../components/heros/list/HeroThumbnail';
import { Link } from 'react-router-dom'; 
import { Divider } from 'semantic-ui-react'; 

class HerosListPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <div className='map-row'>
          <div className='map-width'>
            <Divider className='divider-mobile-hidden' />
            <div>
              <Link to='/hero'>
                <HeroThumbnail oneHero={this.props.oneHero} />  
              </Link>  
            </div>
            <Divider className='divider-mobile-hidden' />
          </div>
        </div>
        <Divider section hidden />
      </>
    );
  }
}

export default HerosListPage;