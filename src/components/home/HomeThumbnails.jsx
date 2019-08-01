import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'semantic-ui-react'

const HomeThumbnails = () => {
  const heros = (
    <Link to='/overwatch-heros'>
      <Button>View</Button>
    </Link>
  )

  const maps = (
    <Link to='/overwatch-maps'>
      <Button>View</Button>
    </Link>
  )

  const modes = (
    <Link to='/overwatch-game-modes'>
      <Button>View</Button>
    </Link>
  )

  const league = (
    <Link to='/overwatch-league'>
      <Button>View</Button>
    </Link>
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