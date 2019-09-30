import React from 'react';
import { Divider } from 'semantic-ui-react';

const Seasonal = () => {
  return (
    <div className='game-mode-seasonal'>
      <h2 className='map-category-title'>Seasonal</h2>
      <div>
        <p className='about-game-mode'>
          Seasonal game modes are only avalible during a certain time of year. Each 
          event is designed to fit the theme of that time of year.
        </p>
        <Divider />
      </div>
      <div className='seasonal-events'>
        <h3 className='seasonal-modes'>Lúcioball</h3>
        <div>
          <p className='about-seasonal-game-mode'>
            This game mode is avalible during the summer games event and is a 3v3 style 
            game mode where each team has a goal to get the ball into the other team's 
            net just like soccer. There is also a competitive version of this game mode 
            where ranking and placement is similar to normal competitive play.
          </p>
        </div>
        <Divider section />
        <h3 className='seasonal-modes'>Junkenstein's Revenge</h3>
        <div>
          <p className='about-seasonal-game-mode'>
            This game mode is a 4 play co-op style match where players must work together 
            to defend the castle gates. If all players die, the match ends. The only heroes 
            avalible to players are McCree, Soldier: 76, Hanzo and Ana. This mode gets harder 
            the longer the match lasts.
          </p>
        </div>
        <Divider section />
        <h3 className='seasonal-modes'>Mei's Snowball Offensive</h3>
        <div>
          <p className='about-seasonal-game-mode'>
            This game mode is tied with the Winter Wonderland event that is a 6v6 style mode 
            where Mei is the hero of choice and her primary weapon uses only one ammo. The 
            only way to obtain more ammo is through piles of snow on the map or her ultimate, 
            which gives her unlimited ammo for a small amount of time. Mei's ammo kills the 
            opponent in one shot.
          </p>
        </div> 
        <Divider section />
        <h3 className='seasonal-modes'>Yeti Hunt</h3>
        <div>
          <p className='about-seasonal-game-mode'>
            This game mode is tied with the Winter Wonderland event that is a 5v1 style mode 
            where 5 players who are Mei must hunt down the yeti which is Winston. The yeti 
            must obtain pieces of meat throughout the map is activate his ultimate ability. 
            If the yeti kills all of the Mei team, the yeti wins. If the team of Mei kill the 
            yeti, that team wins.
          </p>
        </div>
        <Divider section hidden />
      </div>
    </div>
  );
}

export default Seasonal;