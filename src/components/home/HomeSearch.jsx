import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Input, Dropdown, Modal, Image } from 'semantic-ui-react';
import Loader from 'react-loader-spinner';

class HomeSearch extends Component {
  constructor(){
    super()
      this.state = {
        profile: [],
        platform: '',
        region: '',
        name: '',
        battletag: '',
        isLoading: false,
        allInputted: false
      }
  }

  // componentDidUpdate() {
  //   const BASE_PATH = 'https://ow-api.com/v1/stats/:platform/:region/:battletag/complete'
  //   let SEPARATOR = '-'
  //   let URL = `${BASE_PATH}\`${this.state.platform}\`${this.state.region}\`${this.state.name}\`${SEPARATOR}\`${this.state.battletag}\``
  //   fetch(URL)
  //     .then(result => result.json())
  //     .then((response) => {
  //       this.setState({
  //         profile: [response]
  //       })
  //     })
  // }

  getProfile = () => {
    this.setState({ isLoading: true });

    fetch('https://ow-api.com/v1/stats/pc/us/ǤŘĀŅĐÞĄ-1676/complete')
      .then(result => result.json())
      .then((response) => {
        this.setState({
          profile: [response],
          isLoading: false
        })
      })
    console.log(this.getProfile, 'clicked')
  }

  // getProfile = () => {
  //   this.setState({ isLoading: true });

  //   const BASE_PATH = 'https://ow-api.com/v1/stats/'
  //   // let SEPARATOR = '-'
  //   // let COMPLETE = 'complete'
  //   let URL = `${BASE_PATH}\`${this.state.platform}\`${this.state.region}\`${this.state.name}\`-\`${this.state.battletag}\`complete\``
  //   fetch(URL)
  //     .then(result => result.json())
  //     .then((response) => {
  //       this.setState({
  //         profile: [response],
  //         isLoading: false
  //       })
  //     })
  //   console.log(this.getProfile, 'clicked')
  // }

  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    })
    if (this.state.platform.length > 0 && this.state.region.length > 0 && this.state.name.length > 0 && this.state.battletag.length > 0) {
        this.setState({
            allInputted: true,
        })
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const platformOptions = [
      {
        key: 'playstation',
        text: 'Playstation 4',
        value: 'playstation',
      },
      {
        key: 'xbox',
        text: 'Xbox One',
        value: 'xbox',
      },
      {
        key: 'pc',
        text: 'PC',
        value: 'pc',
      },
    ]

    const regionOptions = [
      {
        key: 'us',
        text: 'United States',
        value: 'us',
      },
      {
        key: 'eu',
        text: 'Europe',
        value: 'eu',
      },
      {
        key: 'asia',
        text: 'Asia',
        value: 'asia',
      },
    ]

    // const { platform, region } = this.state
    const { profile, isLoading, allInputted } = this.state;

    var profileLoaded;
    
    if (isLoading) {
      profileLoaded = <div className='loader-align'><Loader type='ThreeDots' color='#FF9D00' height={100} width={100} /></div>;
    } else {
      profileLoaded = profile.map(profile => {
        return <div className='home-search-modal-profile'>
                <div className='test'>
                  <Image src={profile.icon} size='tiny' className='modal-profile-margin' />
                </div>
                <div className='modal-profile-info'>
                  <h1 className='modal-profile-name'>{profile.name}</h1>
                  <div className='modal-level-container'>
                    <h2>{profile.level}</h2>   
                  </div>
                  <div className='modal-platform-container'>
                    <h2 className='modal-platform-text'>{this.state.platform.toUpperCase()}</h2>  
                  </div>
                </div>
              </div>;
      })
    };
    
    var searchProfile;

    if (allInputted === false) {
      searchProfile = <Button disabled className='home-learn-button'>Search</Button>;
    } else {
      searchProfile = <Modal trigger={<Button onClick={this.getProfile} className='home-learn-button'>Search</Button>} closeIcon>
                         <Modal.Content>
                           <Link to='/profile'>
                             <div>
                               {profileLoaded}
                             </div>  
                           </Link>
                         </Modal.Content>
                       </Modal>
    };

    return (
      <div>
        <Container text textAlign='center'>
          <div className='home-search-section'>
            <span className='home-font'>Looking for an Overwatch profile? Search for one below.</span>
            <Divider fitted />
            <span className='home-search-warning'>REMINDER: Overwatch profile MUST be set to public public to view most information.</span> 
            <Divider hidden />
            <Dropdown
              selection
              name='platform'
              options={platformOptions}
              placeholder='Platform'
              onChange={this.handleChange}
            />
            <Divider section />
            <Dropdown
              selection
              name='region'
              options={regionOptions}
              placeholder='Region'
              onChange={this.handleChange}
            />
            <Divider section />
            <div className='input-align'>
              <Input onChange={this.handleInput} name='name' className='input-width' fluid placeholder='Name' key='name' type='string' />
              <Input onChange={this.handleInput} name='battletag' className='input-width' fluid placeholder='Battletag (0-9)' key='battletag' type='number' />  
            </div>
            <Divider />
            {searchProfile}
          </div>
        </Container>   
      </div>
    );
  }
}

export default HomeSearch;