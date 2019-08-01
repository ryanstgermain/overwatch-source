import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'

const Footer= () => {
  return (
    <Router>
      <div className='footer'>
        <div>
          <Divider fitted hidden />
          <h2 className='footer-title'>Overwatch Source</h2>
          <Divider section />
        </div>
        <div className='footer-content'>
          <div>
            <h4>Explore</h4>
            <Divider />
            <div>
              <h5>
                <Link to='/overwatch-heros/'>Overwatch Heros</Link>
              </h5>
              <h5>
                <Link to='/overwatch-maps/'>Overwatch Maps</Link>
              </h5>
              <h5>
                <Link to='/overwatch-game-modes/'>Overwatch Game Modes</Link>
              </h5>
              <h5>
                <Link to='/overwatch-league/'>Overwatch League</Link>
              </h5>
            </div>
          </div>
          <div>
            <h4>Overview</h4>
            <Divider />
            <div>
              <h5>
                <Link to='/overwatch-about'>About Overwatch</Link>
              </h5>
              <h5>
                <Link to='/about-us'>About Us</Link>
              </h5>
              <h5>
                <Link to='/contact-us'>Contact Us</Link>
              </h5>
            </div>
          </div>
          <div>
            <h4>Official Overwatch Links</h4>
            <Divider />
            <div>
              <h5>Website</h5>
              <h5>Twitter</h5>
              <h5>Facebook</h5>
              <h5>Instagram</h5>
            </div>
          </div>  
        </div>
      </div> 
      {/* <Route path='/overwatch-about' component={AboutOverwatch} /> */}
      {/* <Route path='/about-us' component={AboutPage} /> */}
      {/* <Route path='/contact-us' component={ContactPage} />  */}
      {/* <Route path='/overwatch-heros/' component={HerosPage} /> */}
      {/* <Route path='/overwatch-maps/' component={MapsPage} /> */}
      {/* <Route path='/overwatch-game-modes/' component={GameModePage} /> */}
      {/* <Route path='/overwatch-league/' component={LeaguePage} /> */}
    </Router>
  );
}

export default Footer;