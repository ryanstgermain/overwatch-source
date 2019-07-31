import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { Container, Card, Button } from 'semantic-ui-react'

const HomeThumbnails = () => {
  const heros = (
    <Button>
      <Link to='/overwatch-heros'>View</Link>
    </Button>
  )

  const maps = (
    <Button>
      <Link to='/overwatch-maps'>View</Link>
    </Button>
  )

  const modes = (
    <Button>
      <Link to='/overwatch-game-modes'>View</Link>
    </Button>
  )

  const league = (
    <Button>
      <Link to='/overwatch-league'>View</Link>
    </Button>
  )

  return (
    <Container fluid textAlign='center'>
      <div className='home-thumbnails'>
        <Card
          header='Overwatch Heros'
          extra={heros}
        />
        <Card
          header='Overwatch Maps'
          extra={maps}
        />
        <Card
          header='Overwatch Game Modes'
          extra={modes}
        />
        <Card
          header='Overwatch League'
          extra={league}
        />
      </div>
    </Container>
  );
}

export default HomeThumbnails;