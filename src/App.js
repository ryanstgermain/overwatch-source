import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
// import AboutOverwatchPage from './pages/AboutOverwatchPage';
// import AboutPage from './pages/AboutPage';
// import CareerStatsPage from './pages/CareerStatsPage';
// import ContactPage from './pages/ContactPage';
// import GameModePage from './pages/GameModePage';
// import HerosPage from './pages/HerosPage';
// import LeaguePage from './pages/LeaguePage';
// import MapsPage from './pages/MapsPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Route exact path='/' render={()=><HomePage />} />
          {/* <Route path='/overwatch-about' render={()=><AboutOverwatchPage />} /> */}
          {/* <Route path='/about-us' render={()=><AboutPage />} /> */}
          {/* <Route path='/overwatch-career-stats' render={()=><CareerStatsPage />} /> */}
          {/* <Route path='/contact-us' render={()=><ContactPage />} /> */}
          {/* <Route path='/overwatch-game-modes' render={()=><GameModePage />} /> */}
          {/* <Route path='/overwatch-heros' render={()=><HerosPage />} /> */}
          {/* <Route path='/overwatch-league' render={()=><LeaguePage />} /> */}
          {/* <Route path='/overwatch-maps' render={()=><MapsPage />} /> */}
          <Footer />
        </>  
      </Router>
    );  
  }
}

export default App;
