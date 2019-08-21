import React, { Component } from 'react';
import Tank from '../components/heros/list/Tank';
import Damage from '../components/heros/list/Damage';
import Support from '../components/heros/list/Support';

class HerosListPage extends Component {
  render() {
    return (
      <>
        <Tank />
        <Damage />
        <Support />
      </>
    );
  }
}

export default HerosListPage;