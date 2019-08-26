import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Arcade = () => {
  return (
    <div>
      <div className='map-margin-top'>
        <h2 className='map-category-title'>Arcade Maps</h2>
        <p className='map-category'>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
        <Divider section className='divider-hidden' />    
      </div>
        <div className='map-row'>
          <div className='map-arcade-width'>
            <h3 className='map-type'>Elimination</h3>
            <p className='map-type-overview'>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <Divider />
            <div className='maps-list'>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
            </div>
          </div>
          <div className='map-arcade-width'>
            <h3 className='map-type'>Deathmatch</h3>
            <p className='map-type-overview'>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <Divider />
            <div className='maps-list'>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
            </div>
          </div>
          <div className='map-arcade-width'>
            <h3 className='map-type'>Capture the Flag</h3>
            <p className='map-type-overview'>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <Divider />
            <div className='maps-list'>
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>  
            </div>
          </div>    
        </div>
        </div>
  );
}

export default Arcade;