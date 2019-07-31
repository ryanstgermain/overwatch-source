import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Route exact path='/' render={()=><HomePage />} />
          <Footer />
        </>  
      </Router>
    );  
  }
}

export default App;
