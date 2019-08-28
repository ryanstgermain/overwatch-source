import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Seasonal = () => {
  return (
    <div>
      <div className='map-margin-top'>
        <h2 className='map-category-title'>Seasonal Maps</h2>
        <p className='map-category'>
          During different times of the year, certain maps are changed and redecorated to fit the theme.
        </p>
        <Divider section className='divider-mobile-hidden' />    
      </div>
      <div className='map-row'>
        <div className='map-arcade-width-other'>
          <h3 className='map-type-arcade-other'>Lúcioball</h3>
          <Divider />
          <div className='maps-list-arcade-other'>
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
        <div className='map-arcade-width-other'>
          <h3 className='map-type-arcade-other'>Junkenstein's Revenge</h3>
          <Divider />
          <div className='maps-list-arcade-other'>
            <div className='map'>
              <Link to='/map'>
                <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
              </Link>
              <span className='map-font'>Horizon Lunar Colony</span>
              <Divider fitted />
            </div> 
          </div>
        </div>
        <div className='map-arcade-width-other'>
          <h3 className='map-type-arcade-other'>Mei's Snowball Offensive</h3>
          <Divider />
          <div className='maps-list-arcade-other'>
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
        <div className='map-arcade-width-other'>
          <h3 className='map-type-arcade-other'>Yeti Hunt</h3>
          <Divider />
          <div className='maps-list-arcade-other'>
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
      <Divider section hidden />
    </div>
  );
}

export default Seasonal;