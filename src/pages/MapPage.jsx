import React, { Component } from 'react';
import MapCriticalInfo from '../components/maps/individual/MapCriticalInfo';
import MapDescription from '../components/maps/individual/MapDescription';
import MapScreenshots from '../components/maps/individual/MapScreenshots';

class MapPage extends Component {
  render() {
    return (
      <>
        <MapCriticalInfo />
        <MapDescription />
        <MapScreenshots />
      </>
    );
  }
}

export default MapPage;