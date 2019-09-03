import React, { Component } from 'react';
import MapCriticalInfo from '../components/maps/individual/MapCriticalInfo';
import MapDescription from '../components/maps/individual/MapDescription';
import MapScreenshots from '../components/maps/individual/MapScreenshots';
import { Divider } from 'semantic-ui-react';

class MapPage extends Component {
  render() {
    return (
      <div className='map-individual-layout'>
        <div className='map-individual-layout-upper'>
          <MapCriticalInfo />
          <MapDescription />  
        </div>
        <Divider section hidden />
        <MapScreenshots />  
      </div>
    );
  }
}

export default MapPage;