import React, { Component } from 'react';
import Overview from '../components/maps/list/Overview';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MapThumbnail from '../components/maps/list/MapThumbnail';

class MapsListPage extends Component {
  render() {
    return (
      <>
        <Overview />
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
              <div>
                <Link to='/map'>
                  <MapThumbnail oneMap={this.props.oneMap} /> 
                </Link>  
              </div>
            </div>
          </div>
        </div>
        <Divider section hidden />
      </>
    );
  }
}

export default MapsListPage;