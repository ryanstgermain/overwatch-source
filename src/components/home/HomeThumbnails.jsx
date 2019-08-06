import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'semantic-ui-react'

const HomeThumbnails = () => {
  const heros = (
    <Link to='/overwatch-heros'>
      <Button className='view-button'>View</Button>
    </Link>
  )

  const maps = (
    <Link to='/overwatch-maps'>
      <Button className='view-button'>View</Button>
    </Link>
  )

  const modes = (
    <Link to='/overwatch-game-modes'>
      <Button className='view-button'>View</Button>
    </Link>
  )

  const league = (
    <Link to='/overwatch-league'>
      <Button className='view-button'>View</Button>
    </Link>
  )

  return (
    <div>
      <div className='home-thumbnails'>
        <div className='home-thumbnail-shadows'>
          <Card
            header='Overwatch Heros'
            extra={heros}
            color='orange'
          />  
        </div>
        <div className='home-thumbnail-shadows'>
          <Card
            header='Overwatch Maps'
            extra={maps}
            color='blue'
          />  
        </div>
        <div className='home-thumbnail-shadows'>
          <Card
            header='Overwatch Game Modes'
            extra={modes}
            color='pink'
          />  
        </div>
        <div className='home-thumbnail-shadows'>
          <Card
            header='Overwatch League'
            extra={league}
            color='green'
          />  
        </div>
      </div>
    </div>
  );
}

export default HomeThumbnails;