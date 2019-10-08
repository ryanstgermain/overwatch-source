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
    </Container>
  );
}

export default HomeNavigation;