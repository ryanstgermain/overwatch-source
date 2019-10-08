import React from 'react';
import { Image } from 'semantic-ui-react';

const ProfilePage = (props) => {
  return (
    props.profile.map(profile => {
      return (
        <div key={`profile ${profile.name}`}>
          <h1>poop</h1>
          <h1>{profile.name}</h1>
          <h1>{props.platform}</h1>
          <Image src={profile.levelIcon} size='tiny' />
          <Image src={profile.prestigeIcon} size='tiny' />
        </div>
      )
    })
  )
}

export default ProfilePage;