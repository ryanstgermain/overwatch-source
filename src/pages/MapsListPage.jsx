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
        <div className='map-row'>
          <div className='map-width'>
            <Divider className='divider-mobile-hidden' />
            <div>
              <Link to='/map'>
                <MapThumbnail oneMap={this.props.oneMap} /> 
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

export default MapsListPage;