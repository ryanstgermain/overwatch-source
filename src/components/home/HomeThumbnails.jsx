import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Divider } from 'semantic-ui-react';

const HomeThumbnails = () => {
  const heros = (
    <Link to='/overwatch-heroes'>
      {/* <Button className='view-button'>View</Button> */}
      <Button className='view-button'>Overwatch Heroes</Button>
    </Link>
  )

  const maps = (
    <Link to='/overwatch-maps'>
      {/* <Button className='view-button'>View</Button> */}
      <Button className='view-button'>Overwatch Maps</Button>
    </Link>
  )

  const modes = (
    <Link to='/overwatch-game-modes'>
      {/* <Button className='view-button'>View</Button> */}
      <Button className='view-button'>Overwatch Game Modes</Button>
    </Link>
  )

  const league = (
    <Link to='/overwatch-league'>
      {/* <Button className='view-button'>View</Button> */}
      <Button className='view-button'>Overwatch League</Button>
    </Link>
  )

  return (
    <div className='home-thumbnails'>
      <div>
        <Card
          image='https://gamerescape.com/wp-content/uploads/2017/08/overwatchsummer2017.jpg?w=640'
          // header='Overwatch Heros'
          extra={heros}
          color='orange'
        />
        <Divider />  
      </div>
      <div className='thumbnails-margin-top'>
        <Card
          image='https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F47c6392407c993d33e3018dc7e0ed803%2F206597072%2Fdva.jpg&client=amp-blogside-v2&signature=1c7d830039d65061f5ead25b378daaf39e9ceb7e'
          // header='Overwatch Maps'
          extra={maps}
          color='blue'
        />  
        <Divider />
      </div>
      <div className='thumbnails-margin-top'>
        <Card
          image='https://cdn.mos.cms.futurecdn.net/VRGyisv3GGeiCTXLrcqf3n.jpg'
          // header='Overwatch Game Modes'
          extra={modes}
          color='pink'
        />  
        <Divider />
      </div>
      <div className='thumbnails-margin-top'>
        <Card
          image='https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/07/16134425/OVR_SummerGames19_012_png_jpgcopy.jpg'
          // header='Overwatch League'
          extra={league}
          color='green'
        />  
        <Divider />
      </div>
    </div>
  );
}

export default HomeThumbnails;