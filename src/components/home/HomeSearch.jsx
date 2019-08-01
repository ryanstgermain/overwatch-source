import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Input } from 'semantic-ui-react'

const HomeSearch = () => {
  return (
    <Container text textAlign='center'>
      <div className='home-learn-section'>
        <span>If you would like to know more about Overwatch Source, click the button below.</span>
        <Divider />
        <Link to='about-us'>
          <Button className='home-learn-button'>Learn More</Button>
        </Link>
      </div>
      <div className='home-search-section'>
        <span>Looking for an Overwatch profile? Search for one below.</span>
        <Divider />
        <Input action='Search' placeholder='Search...' />
      </div>
    </Container>
  );
}

export default HomeSearch;