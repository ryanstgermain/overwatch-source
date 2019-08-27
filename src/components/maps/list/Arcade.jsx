import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Arcade = () => {
  return (
    <div>
      <div className='map-margin-top'>
        <h2 className='map-category-title'>Arcade Maps</h2>
        <p className='map-category'>
          Maps used in arcade. There are currently 7 different maps used in arcade.
        </p>
        <Divider section className='divider-mobile-hidden' />    
      </div>
      <div className='map-row'>
        <div className='map-arcade-width'>
          <h3 className='map-type'>Elimination</h3>
          <p className='map-type-overview'>
            Elimination maps are smaller, made for smaller teams or 1v1 duels.
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
          <h3 className='map-type'>Capture the Flag</h3>
          <p className='map-type-overview'>
            Capture the flag maps are designed bigger than other arcade maps and have spawn rooms at each end. Players must steal the flag at the enemy spawn and bring it back to their own spawn.
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
        <div className='map-arcade-width'>
          <h3 className='map-type'>Deathmatch</h3>
          <p className='map-type-overview'>
            Deathmatch maps feature no spawn rooms and are the only maps available for deathmatch modes. 
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
      </div>
      <Divider className='divider-desktop-hidden' />
    </div>
  );
}

export default Arcade;