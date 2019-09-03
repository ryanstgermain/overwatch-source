import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Footer= () => {
  return (
    <div>
      <div className='footer'>
        <div>
          <Divider fitted hidden />
          <h2 className='footer-title'>Overwatch Source</h2>
          <Divider section inverted />
        </div>
        <div className='footer-content'>
          <div>
            <h4>Explore</h4>
            <Divider inverted />
            <div>
              <Link to='/overwatch-heros'>
                <h5>Overwatch Heros</h5>
              </Link>
              <Link to='/overwatch-maps'>
                <h5>Overwatch Maps</h5>
              </Link>
              <Link to='/overwatch-game-modes'>
                <h5>Overwatch Game Modes</h5>
              </Link>
              <Link to='/overwatch-league'>
                <h5>Overwatch League</h5>
              </Link>
              <Link to='/overwatch-competitive-play'>
                <h5>Overwatch Competitive Play</h5>
              </Link>
            </div>
          </div>
          <div>
            <h4>Official Overwatch Links</h4>
            <Divider inverted />
            <ul className='footer-list'>
              <a href='https://playoverwatch.com/en-us/' target='_blank' rel='noopener noreferrer'>
                <li className='footer-font'>Website</li>
              </a>
              <a href='https://twitter.com/PlayOverwatch?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank' rel='noopener noreferrer'>
                <li className='footer-font'>Twitter</li>  
              </a>
              <a href='https://www.facebook.com/PlayOverwatch/' target='_blank' rel='noopener noreferrer'>
                <li className='footer-font'>Facebook</li>  
              </a>
              <a href='https://www.instagram.com/playoverwatch/' target='_blank' rel='noopener noreferrer'>
                <li className='footer-font'>Instagram</li>                
              </a>
            </ul>
          </div>  
          <div className='footer-bottom'>
            <h4>Overview</h4>
            <Divider inverted />
            <div>
              <Link to='/'>
                <h5>Home</h5>
              </Link>
              <Link to='/overwatch-about'>
                <h5>About Overwatch</h5>
              </Link>
              <Link to='/about-us'>
                <h5>About Us</h5>
              </Link>
              <Link to='/contact-us'>
                <h5>Contact Us</h5>
              </Link>
              <Link to='/overwatch-career-stats'>
                <h5>Career Stats</h5>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Footer;