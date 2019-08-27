import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';

const Standard = () => {
  return (
    <div>
      <div className='map-margin-top'>
        <h2 className='map-category-title'>Standard Maps</h2>
        <p className='map-category'>
          Maps used in standard play. There are currently 21 different maps used in quick play and competitive play.
        </p>
        <Divider section className='divider-mobile-hidden' />    
      </div>
      <div className='map-list-layout'>
        <div className='map-row'>
          <div className='map-width'>
            <h3 className='map-type'>Assault</h3>
            <p className='map-type-overview'>
              Assault maps have two areas where players must capture or defend depending on what side you are on. 
              The attacking team must work together to capture both objective A and B to score a victory. The 
              defending team must ensure the the attacking team does not capture any points.
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
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>    
            </div>
          </div>
          <div className='map-width'>
            <h3 className='map-type'>Escort</h3>
            <p className='map-type-overview'>
              Escort maps have a "payload" that the attacking team has to push to the end of the map while the 
              defending team tries to stop the attacking team from scoring a victory. Each map has different 
              checkpoints where once reached, the attacking team is given extra time to reach the other checkpoints 
              or the destination. If the attacking team cannot reach a checkpoint or the finish, the defending team
              wins.
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
        <div className='map-row'>
          <div className='map-width'>
            <h3 className='map-type'>Hybrid</h3>
            <p className='map-type-overview'>
              Hybrid maps are a combination of assault and escort. The attacking team must capture objective A then push
              the payload to each checkpoint, eventually reaching the finish. If the attacking team cannot capture 
              objective A or reach any checkpoints or the finish, the defending team wins.
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
              <div className='map'>
                <Link to='/map'>
                  <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/1600px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6' size='small' />
                </Link>
                <span className='map-font'>Horizon Lunar Colony</span>
                <Divider fitted />
              </div>
            </div>
          </div>  
          <div className='map-width'>
            <h3 className='map-type'>Control</h3>
            <p className='map-type-overview'>
              Control maps are different because both teams are attackers. Each team must capture and defend a point on 
              the map in order to win. If a team captures the point, the other team has the opportunity to steal it. 
              The team that has the point must have a strategy in order for them to not steal it back.
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
      <Divider className='divider-desktop-hidden' />
    </div>
  );
}

export default Standard;