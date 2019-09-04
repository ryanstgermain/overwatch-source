import React from 'react';
import { Divider } from 'semantic-ui-react';

const AboutHero = () => {
  return (
    <div className='about-hero-layout'>
      <span className='hero-quote-text'>"hero quote"</span>
      <h2 className='maps-used'>Hero Bio</h2>
      {/* <Divider /> */}
      <div className='hero-bio-text'>
        <p>
          Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum 
        </p>
      </div>
    </div>
  );
}

export default AboutHero;