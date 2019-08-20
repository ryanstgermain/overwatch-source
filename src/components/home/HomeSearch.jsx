import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Input, Card } from 'semantic-ui-react'

const HomeSearch = () => {
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
            <span className='home-data-font'>View Overwatch Career Stats</span>
          </div>  
          <Divider />
        </Link>
        <Link to='/overwatch-league'>
          <div className='home-data'>
            <span className='home-data-font'>View Overwatch League Data</span>
          </div>  
          <Divider />
        </Link>
      </div>
      <div className='home-search-section'>
        <span className='home-font'>Looking for an Overwatch profile? Search for one below.</span>
        <Divider />
        <Input action='Search' placeholder='Search...' />
      </div>
    </Container>
  );
}

export default HomeSearch;