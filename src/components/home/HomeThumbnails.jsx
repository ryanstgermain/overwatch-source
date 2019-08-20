import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Divider } from 'semantic-ui-react'

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
    <div className='home-thumbnails'>
      <div>
        <Card
          header='Overwatch Heros'
          extra={heros}
          color='orange'
        />
        <Divider />  
      </div>
      <div>
        <Card
          header='Overwatch Maps'
          extra={maps}
          color='blue'
        />  
        <Divider />
      </div>
      <div>
        <Card
          header='Overwatch Game Modes'
          extra={modes}
          color='pink'
        />  
        <Divider />
      </div>
      <div>
        <Card
          header='Overwatch League'
          extra={league}
          color='green'
        />  
        <Divider />
      </div>
    </div>
  );
}

export default HomeThumbnails;