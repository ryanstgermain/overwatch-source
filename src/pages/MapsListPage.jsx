import React, { Component } from 'react';
import Overview from '../components/maps/list/Overview';
import { Divider } from 'semantic-ui-react';
import MapThumbnail from '../components/maps/list/MapThumbnail';

class MapsListPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <div className='map-margin-top'>
          <h2 className='map-category-title'>Standard Maps</h2>
          <p className='map-category'>
            Maps used in standard play. There are currently 21 different maps used in quick play and competitive play.
          </p>
          <Divider section className='divider-mobile-hidden' />    
        </div>
        <div className='map-list-layout'>
          <div className='map-row'>
            <div className='map-width'>
              <h3 className='map-type'>Assault</h3>
              <p className='map-type-overview'>
                Assault maps have two areas where players must capture or defend depending on what side you are on. 
                The attacking team must work together to capture both objective A and B to score a victory. The 
                defending team must ensure the the attacking team does not capture any points.
              </p>
              <Divider />
              <div className='maps-list'>
                <MapThumbnail oneMap={this.props.oneMap} /> 
              </div>
            </div>
          </div>
        </div>
        <Divider className='divider-desktop-hidden' />
        <Divider section hidden />
      </>
    );
  }
}

export default MapsListPage;