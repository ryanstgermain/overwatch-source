import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { Button, Container, Divider } from 'semantic-ui-react'

const HomeButton = () => {
  return (
    <Container text textAlign='center'>
      <div className='home-button-section'>
        <span>If you would like to know more about Overwatch Source, click the button below.</span>
        <Divider />
        <Button>
          <Link to='/about-us'>Learn More</Link>
        </Button>
      </div>
    </Container>
  );
}

export default HomeButton;