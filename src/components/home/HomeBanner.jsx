import React from 'react';
import { Container, Divider } from 'semantic-ui-react'

const HomeBanner = () => {
  return (
    <Container fluid textAlign='center' className='home-banner'>
      <h2>Welcome to Overwatch Source</h2>
      <Divider section inverted />
      <span>Your #1 online dashboard for Overwatch fans.</span>
    </Container>
  );
}

export default HomeBanner;