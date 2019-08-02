import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Input, Card } from 'semantic-ui-react'

const HomeSearch = () => {
  const career = [
    <Link to='/overwatch-career-stats'>
      <Button>Search</Button>
    </Link>
  ]
  
  const league = [
    <Link to='/overwatch-league'>
      <Button>Search</Button>
    </Link>
  ]

  return (
    <Container text textAlign='center'>
      <div className='home-learn-section'>
        <span>If you would like to know more about Overwatch Source, click the button below.</span>
        <Divider />
        <Link to='about-us'>
          <Button className='home-learn-button'>Learn More</Button>
        </Link>
      </div>
      <div className='home-data-section'>
        <Card
          header='View Overwatch Career Stats'
          extra={career} 
        />
        <Card
          header='View Overwatch League Data'
          extra={league}
        />
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