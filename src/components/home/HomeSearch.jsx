import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Input, Dropdown } from 'semantic-ui-react';
// import Loader from 'react-loader-spinner';

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

  // getProfile = () => {
  //   fetch('https://ow-api.com/v1/stats/pc/us/ǤŘĀŅĐÞĄ-1676/complete')
  //     .then(result => result.json())
  //     .then((response) => {
  //       this.setState({
  //         profile: [response]
  //       })
  //     })
  //   console.log(this.getProfile, 'clicked')
  // }

  getProfile = () => {
    const BASE_PATH = 'https://ow-api.com/v1/stats/'
    // let SEPARATOR = '-'
    // let COMPLETE = 'complete'
    let URL = `${BASE_PATH}\`${this.state.platform}\`${this.state.region}\`${this.state.name}\`-\`${this.state.battletag}\`complete\``
    fetch(URL)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          profile: [response]
        })
      })
    console.log(this.getProfile, 'clicked')
  }

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

  // handleChange(event) {
  //   this.setState({name: event.target.name})
  // }

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

    const { platform, region } = this.state

    return (
      <div>
        <Container text textAlign='center'>
          <div className='home-search-section'>
            <span className='home-font'>Looking for an Overwatch profile? Search for one below.</span>
            <Divider />
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
              <Input onChange={this.handleInput} name='name' className='input-width' fluid placeholder='Name' key='name' />
              <Input onChange={this.handleInput} name='battletag' className='input-width' fluid placeholder='Battletag' key='battletag'  />  
            </div>
            <Divider />
            {/* <Link to='/profile' onClick={this.getProfile}>
              <Button className='home-learn-button'>Search</Button>  
            </Link> */}
            <Button onClick={this.getProfile} className='home-learn-button'>Search</Button>
          </div>
        </Container>   
      </div>
    );
  }
}

export default HomeSearch;