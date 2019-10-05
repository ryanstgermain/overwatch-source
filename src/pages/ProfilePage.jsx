import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class ProfilePage extends Component {
  constructor(){
    super()
      this.state = {
        profile: [],
        platform: '',
        region: '',
        name: '',
        battletag: '',
        isLoading: false
      }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://ow-api.com/v1/stats/:platform/:region/:battletag/complete')
      .then(result => result.json())
      .then((data => this.setState({ profile: data, isLoading: false })));
  }

  render() {
    const { profile, isLoading } = this.state;

    if (isLoading) {
      return <div className='loader-align'><Loader type='Grid' color='#FF9D00' height={120} width={120} /></div>
    }
    return (
      <>
        <h1>Profile page</h1>
      </>
    );
  }
}

export default ProfilePage;