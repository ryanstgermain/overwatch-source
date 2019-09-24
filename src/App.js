import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutOverwatchPage from './pages/AboutOverwatchPage';
import AboutPage from './pages/AboutPage';
import CareerStatsPage from './pages/CareerStatsPage';
import ContactPage from './pages/ContactPage';
import GameModeListPage from './pages/GameModeListPage';
import HerosListPage from './pages/HerosListPage';
import HeroPage from './pages/HeroPage';
import LeaguePage from './pages/LeaguePage';
import MapsListPage from './pages/MapsListPage';
import MapPage from './pages/MapPage';
import CompetitivePlayPage from './pages/CompetitivePlayPage';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super()
      this.state = {
        map: []
      }
  }

  oneMap = (event) => {
    fetch(`http://localhost:3000/${event.target.id}`,)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
          map: [response]
        })
      })
  console.log(this.oneMap, 'clicked')

  }

  render() {
    return (
      <Router>
        <>
          <Header />
          <Navbar />
          <Route exact path='/' render={()=><HomePage />} />
          <Route path='/overwatch-about' render={()=><AboutOverwatchPage />} />
          <Route path='/about-us' render={()=><AboutPage />} />
          <Route path='/overwatch-career-stats' render={()=><CareerStatsPage />} />
          <Route path='/contact-us' render={()=><ContactPage />} />
          <Route path='/overwatch-game-modes' render={()=><GameModeListPage />} />
          <Route path='/overwatch-heros' render={()=><HerosListPage />} />
          <Route path='/hero' render={()=><HeroPage />} />
          <Route path='/overwatch-league' render={()=><LeaguePage />} />
          <Route path='/overwatch-maps' render={()=><MapsListPage oneMap={this.oneMap} map={this.state.map} />} />
          <Route path='/map' render={()=><MapPage oneMap={this.oneMap} map={this.state.map} />} />
          <Route path='/overwatch-competitive-play' render={()=><CompetitivePlayPage />} />
          <Footer />
        </>  
      </Router>
    );  
  }
}

export default App;
