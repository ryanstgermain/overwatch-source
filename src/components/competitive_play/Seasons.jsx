import React from 'react';
import { Divider } from 'semantic-ui-react';

const Seasons = () => {
  return (
    <div className='competitive-section'>
      <div className='competitive-ranking'>
        <h2 className='maps-used'>Seasons</h2> 
        <Divider section hidden />
        <div className='section-competitive'>
          <Divider section className='divider-desktop-hidden' />
          <div className='competitive-seasons-section'>
            <div className='seasons-info-align'>
              <h3 className='maps-used'>Season</h3>
              <div className='seasons-section-info'>
                <Divider fitted hidden />
                <span className='seasons-section-info-text'>1</span>
                <span className='seasons-section-info-text'>2</span>
                <span className='seasons-section-info-text'>3</span>
                <span className='seasons-section-info-text'>4</span>
                <span className='seasons-section-info-text'>5</span>
                <span className='seasons-section-info-text'>6</span>
                <span className='seasons-section-info-text'>7</span>
                <span className='seasons-section-info-text'>8</span>
                <span className='seasons-section-info-text'>9</span>
                <span className='seasons-section-info-text'>10</span>
                <span className='seasons-section-info-text'>11</span>
                <span className='seasons-section-info-text'>12</span>
                <span className='seasons-section-info-text'>13</span>
                <span className='seasons-section-info-text'>14</span>
                <span className='seasons-section-info-text-current'>15</span>
                <Divider section />
              </div>    
            </div>
            <div className='seasons-info-align'>
              <h3 className='maps-used'>Start</h3>
              <div className='seasons-section-info'>
                <Divider fitted hidden />
                <span className='seasons-section-info-text'>Jun 28th, 2016</span>
                <span className='seasons-section-info-text'>Sep 2nd, 2016</span>
                <span className='seasons-section-info-text'>Dec 1st, 2016</span>
                <span className='seasons-section-info-text'>Feb 28th, 2017</span>
                <span className='seasons-section-info-text'>June 1st, 2017 </span>
                <span className='seasons-section-info-text'>September 1st, 2017 </span>
                <span className='seasons-section-info-text'>November 1st, 2017</span>
                <span className='seasons-section-info-text'>Jan 1st, 2018</span> 
                <span className='seasons-section-info-text'>Feb 28th, 2018</span> 
                <span className='seasons-section-info-text'>May 1st, 2018</span> 
                <span className='seasons-section-info-text'>July 2nd, 2018</span> 
                <span className='seasons-section-info-text'>August 31st, 2018</span> 
                <span className='seasons-section-info-text'>November 1st, 2018 </span> 
                <span className='seasons-section-info-text'>January 1st, 2019</span> 
                <span className='seasons-section-info-text-current'>March 1st, 2019</span>
                <Divider section /> 
              </div>    
            </div>
            <div className='seasons-info-align'>
              <h3 className='maps-used'>End</h3> 
              <div className='seasons-section-info'>
                <Divider fitted hidden />
                <span className='seasons-section-info-text'>Aug 17th, 2016</span>
                <span className='seasons-section-info-text'>Nov 24th, 2016</span>
                <span className='seasons-section-info-text'>Feb 21st, 2017</span>
                <span className='seasons-section-info-text'>May 28th, 2017</span>
                <span className='seasons-section-info-text'>August 28th, 2017</span>
                <span className='seasons-section-info-text'>October 28th, 2017 </span>
                <span className='seasons-section-info-text'>December 29th, 2017</span>
                <span className='seasons-section-info-text'>Feb 25th, 2018</span>
                <span className='seasons-section-info-text'>Apr 28th, 2018</span> 
                <span className='seasons-section-info-text'>July 1st, 2018</span> 
                <span className='seasons-section-info-text'>Aug 28th, 2018</span> 
                <span className='seasons-section-info-text'>October 28th, 2018</span> 
                <span className='seasons-section-info-text'>December 31st, 2018</span> 
                <span className='seasons-section-info-text'>February 28th, 2019</span> 
                <span className='seasons-section-info-text-current'>April 29th, 2019</span>
                <Divider section /> 
              </div>   
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seasons;