import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

const Ranking = () => {
  return (
    <div className='competitive-section'>
      <div className='competitive-ranking'>
        <h2 className='maps-used'>Ranking</h2>
        <div>
          <p className='about-game-mode'>
            Before diving into the world of competitive, 
            players must complete 10 placement matches to 
            receive their rank. Once completed, the player 
            will be given their rank. Ranking is represented 
            as skill rating (SR) and goes from 1 to 5000. 
            Obviously, the lower the number, the lower the 
            ank, the higher the number, the higher the rank. 
            After each match, the player's SR will change 
            depending on if they won or lost. If the plaer won, 
            they will gain more SR, if the player lost, the 
            player will lose SR. Players do not gain or lose 
            any SR if the match ends in a draw. The player's 
            ranking is showed with a portrait that varies based 
            on their SR as shown below.
          </p>
          <Divider />
          <div className='ranking-info-section'>
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/8/89/Badge_1_Bronze.png/120px-Badge_1_Bronze.png?version=fa38e0c94d93c352f40367c620ddd5af' size='tiny' />
              <h4>Bronze</h4>
              <span className='rank-sr'>1 - 1499 SR</span>
            </div>
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/bb/Badge_2_Silver.png/120px-Badge_2_Silver.png?version=d5f167d121ece4c68da7559fac9b5897' size='tiny' />
              <h4>Silver</h4>
              <span className='rank-sr'>1500 - 1999 SR</span>
            </div> 
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b8/Badge_3_Gold.png/120px-Badge_3_Gold.png?version=a74dc72feb1a0306497263c1e0850411' size='tiny' />
              <h4>Gold</h4>
              <span className='rank-sr'>2000 - 2499 SR</span>
            </div> 
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f8/Badge_4_Platinum.png?version=ac66a0d7101dc3e4f5e31109ffb3c21e' size='tiny' />
              <h4>Platinum</h4>
              <span className='rank-sr'>2500 - 2999 SR</span>
            </div>
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/2f/Badge_5_Diamond.png/120px-Badge_5_Diamond.png?version=bf806f5eb546cb9a1b71a04fa4cf3faa' size='tiny' />
              <h4>Diamond</h4>
              <span className='rank-sr'>3000 - 3499 SR</span>
            </div> 
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Badge_6_Master.png?version=828ff6bb5045912d4debaba8bda92bca' size='tiny' />
              <h4>Master</h4>
              <span className='rank-sr'>3500 - 3999 SR</span>
            </div> 
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/8/87/Badge_7_Grandmaster.png/120px-Badge_7_Grandmaster.png?version=c7d21f01f2ecffcdcbdb367c425618f2' size='tiny' />
              <h4>Grandmaster</h4>
              <span className='rank-sr'>4000+</span>
            </div> 
            <div className='ranking-info'>
              <Image src='https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/73/Badge_8_Top_500.png/120px-Badge_8_Top_500.png?version=61fe40ef7c98c2fe2e699f8708bc9248' size='tiny' />
              <h4>Top 500</h4>
              <span className='rank-sr'>Top 500 in the region</span>
            </div>     
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Ranking;