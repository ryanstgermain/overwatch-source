import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Container } from 'semantic-ui-react';

const HomeNavigation = () => {
  return (
    <Container text textAlign='center'>
      <div className='home-learn-section'>
        <span className='home-font'>If you would like to know more about Overwatch Source, click the button below.</span>
        <Divider />
        <Link to='about-us'>
          <Button className='home-learn-button'>Learn More</Button>
        </Link>
      </div>
      <div className='home-data-section'>
        <Link to='/overwatch-career-stats'>
          <div className='home-data'>
            <span className='home-data-font'>Overwatch Career Stats</span>
          </div>  
          <Divider className='divider-mobile-hidden' />
        </Link>
        <Link to='/overwatch-league'>
          <div className='home-data'>
            <span className='home-data-font'>Overwatch League Data</span>
          </div>  
          <Divider className='divider-mobile-hidden' />
        </Link>
      </div>
    </Container>
  );
}

export default HomeNavigation;