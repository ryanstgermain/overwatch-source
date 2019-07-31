import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    );  
  }
}

export default App;
