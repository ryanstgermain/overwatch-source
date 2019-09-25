import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';

class MapThumbnail extends Component {
  constructor(){
    super()
      this.state = {
        maps: [],
        map: [],
        map_name: '',
        map_image: '',
        map_location: '',
        map_type: '',
        map_description: '',
        map_screenshot: [],
        map_video: '',
        isLoading: false
      }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3000/')
      .then(result => result.json())
      .then((data => this.setState({ maps: data, isLoading: false })));
  }
  render(){
    const { maps, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div className='map'>
        {maps.map(map =>
          <div className='map-padding'>
            <Image onClick={this.props.oneMap} id={map.id} key={map.id} src={map.map_image} className='map-image-size' />
            <div onClick={this.props.oneMap} id={map.id} key={map.id} className='map-name-container'>
              <span className='map-font'>{map.map_name} </span>
              <span className='map-font-type'>- {map.map_type}</span>    
            </div>
          </div>
        )}
        <Divider fitted />
      </div>
    );
  }
}

export default MapThumbnail;