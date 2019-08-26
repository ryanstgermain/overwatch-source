import React, { Component } from 'react';
import Overview from '../components/maps/list/Overview';
import Standard from '../components/maps/list/Standard';
import Arcade from '../components/maps/list/Arcade';
import OtherArcade from '../components/maps/list/OtherArcade';
import Seasonal from '../components/maps/list/Seasonal';

class MapsListPage extends Component {
  render() {
    return (
      <>
        <Overview />
        <div className='maps-list-layout'>
          <Standard />
          <Arcade />
          <OtherArcade />
          <Seasonal />  
        </div>
      </>
    );
  }
}

export default MapsListPage;