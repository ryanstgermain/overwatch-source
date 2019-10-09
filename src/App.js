import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Container, Divider, Input, Dropdown, Modal, Image, Icon } from 'semantic-ui-react';
import Loader from 'react-loader-spinner';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeBanner from './components/home/HomeBanner';
import HomeNavigation from './components/home/HomeNavigation';
import HomeThumbnails from './components/home/HomeThumbnails';
import AboutOverwatchPage from './pages/AboutOverwatchPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GameModeListPage from './pages/GameModeListPage';
import HerosListPage from './pages/HerosListPage';
import HeroPage from './pages/HeroPage';
import MapsListPage from './pages/MapsListPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import CompetitivePlayPage from './pages/CompetitivePlayPage';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super()
      this.state = {
        map: [],
        hero: [],
        profile: [],
        platform: '',
        region: '',
        name: '',
        battletag: '',
        isLoading: false,
        allInputted: false,
        error: null
      }
  }

  oneMap = (event) => {
    fetch(`http://localhost:3000/maps/${event.target.id}`,)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
          map: [response]
        })
      })
  }

  oneHero = (event) => {
    fetch(`http://localhost:3000/heros/${event.target.id}`,)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
          hero: [response]
        })
      })
  }

  // getProfile = () => {
  //   this.setState({ isLoading: true });

  //   fetch('https://ow-api.com/v1/stats/pc/us/ǤŘĀŅĐÞĄ-1676/complete')
  //     .then(result => result.json())
  //     .then((response) => {
  //       this.setState({
  //         profile: [response],
  //         isLoading: false
  //       })
  //     })
  // }

  getProfile = () => {
    this.setState({ isLoading: true });

    fetch(`https://ow-api.com/v1/stats/${this.state.platform}/${this.state.region}/${this.state.name}-${this.state.battletag}/complete`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Profile not found');
        }
      })
      .then((response) => {
        this.setState({
          profile: [response],
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
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
    const { profile, isLoading, error, allInputted } = this.state;

    var profileLoaded;

    if (error) {
      profileLoaded = 
        <div>
          <h2 className='profile-private-header'>{error.message}</h2>
          <Divider hidden />
          <div>
            <h3 className='profile-private-note'>Can't find what you're looking for? Here are some helpful tips.</h3>
            <Divider section />
            <p className='profile-private-note'>Be sure to enter the player BattleTag, XBL GamerTag or PSN ID exactly, case-sensitive, including any spaces or punctuation.</p>
            <p className='profile-private-note'>The "#" is not needed when entering the battletag. Just enter the numeric value.</p>
          </div>
        </div>
    } else {
      if (isLoading) {
        profileLoaded = <div className='loader-align'><Loader type='ThreeDots' color='#FF9D00' height={100} width={100} /></div>;
      } else {
        profileLoaded = profile.map(profile => {
          return (
            <div profile={this.state.profile} key={profile.name}>
              {profile.private === true ? (
                <div className='modal-profile-private'>
                  <Icon color='black' name='lock' size='big' bordered />
                  <Divider hidden />
                  <div>
                    <h2 className='profile-private-header'>Sorry, this profile is private!</h2>
                    <Divider section />
                    <h3 className='profile-private-note'>Note: As of the June 26th, 2018 patch, Career Profiles will no longer be public by default (now defaults to Friends Only). An option to make Career Profiles visible has been added under Options > Social > Profile Visibility.</h3>  
                  </div>
                </div>
              ) : (
                <Link to='/profile'>
                  <div key={profile.name} className='home-search-modal-profile'>
                    <div>
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
                  </div>  
                </Link>
              )}
            </div>  
          )
        });
      }
    };
    
    var searchProfile;

    if (allInputted === false) {
      searchProfile = <Button disabled className='home-learn-button'>Search</Button>;
    } else {
      searchProfile = <Modal trigger={<Button onClick={this.getProfile} className='home-learn-button'>Search</Button>} closeIcon>
                        <Modal.Content>
                          {profileLoaded}
                        </Modal.Content>
                      </Modal>;
    };

    return (
      <Router>
        <>
          <Header />
          <Navbar />
          <Route exact path='/' render={(
            )=>
              <div>
                <HomeBanner />
                <HomeNavigation />
                <div>
                  <Container text textAlign='center'>
                    <div className='home-search-section'>
                      <span className='home-font'>Looking for an Overwatch profile? Search for one below.</span>
                      <Divider fitted />
                      <span className='home-search-warning'>REMINDER: Overwatch profile MUST be set to public public to view information.</span> 
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
              <HomeThumbnails />
            </div>
          } />
          <Route path='/overwatch-about' render={()=><AboutOverwatchPage />} />
          <Route path='/about-us' render={()=><AboutPage />} />
          <Route path='/contact-us' render={()=><ContactPage />} />
          <Route path='/overwatch-game-modes' render={()=><GameModeListPage />} />
          <Route path='/overwatch-heroes' render={()=><HerosListPage oneHero={this.oneHero} hero={this.state.hero} />} />
          <Route path='/hero' render={()=><HeroPage oneHero={this.oneHero} hero={this.state.hero} />} />
          <Route path='/overwatch-maps' render={()=><MapsListPage oneMap={this.oneMap} map={this.state.map} />} />
          <Route path='/map' render={()=><MapPage oneMap={this.oneMap} map={this.state.map} />} />
          <Route path='/profile' render={()=><ProfilePage profile={this.state.profile} platform={this.state.platform} region={this.state.region} name={this.state.name} battletag={this.state.battletag} />} />
          <Route path='/overwatch-competitive-play' render={()=><CompetitivePlayPage />} />
          <Footer />
        </>  
      </Router>
    );  
  }
}

export default App;
