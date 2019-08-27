import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const Seasonal = () => {
  return (
    <div className='game-mode-seasonal'>
      <h2 className='map-category-title'>Seasonal</h2>
      <div>
        <p className='about-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        <Divider />
      </div>
      <div className='seasonal-events'>
        <h3 className='seasonal-modes'>Lúcioball</h3>
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div>
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Divider />
          </div>
        </div>
        <h3 className='seasonal-modes'>Junkenstein's Revenge</h3>
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div>
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Divider />
          </div>
        </div>
        <h3 className='seasonal-modes'>Mei's Snowball Offensive</h3>
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div> 
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Divider />
          </div>
        </div> 
        <h3 className='seasonal-modes'>Yeti Hunt</h3>
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div>
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Divider />
          </div>
        </div>
        <h3 className='seasonal-modes'>Overwatch Uprising</h3>
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div>
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Divider />
          </div>
        </div>
        <h3 className='seasonal-modes'>Overwatch Retribution</h3>  
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div>
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
            <Divider />
          </div>
        </div>
        <h3 className='seasonal-modes'>Overwatch Storm Rising</h3>
        <div>
          <p className='about-seasonal-game-mode'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .</p>
        </div>
        <Divider section hidden />
        <div>
        <h3 className='seasonal-maps-used'>Maps Used:</h3>
          <div>
            <Link to='/overwatch-map'>
              <h4 className='seasonal-mode-map-list'>Horizon Lunar Colony</h4>
            </Link>
          </div>
        </div>
      </div>
      <Divider section />
    </div>
  );
}

export default Seasonal;