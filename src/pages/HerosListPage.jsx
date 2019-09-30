import React, { Component } from 'react';
import Overview from '../components/heros/list/Overview';
import HeroThumbnail from '../components/heros/list/HeroThumbnail';
import { Link } from 'react-router-dom';  

class HerosListPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <div>
          <Link to='/hero'>
            <HeroThumbnail oneHero={this.props.oneHero} />  
          </Link>
        </div>
      </>
    );
  }
}

export default HerosListPage;