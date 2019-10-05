import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Loader from 'react-loader-spinner';

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
        map_video: '',
        isLoading: false
      }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3000/maps')
      .then(result => result.json())
      .then((data => this.setState({ maps: data, isLoading: false })));
  }
  render(){
    const { maps, isLoading } = this.state;
    if (isLoading) {
      return <div className='loader-align'><Loader type='Grid' color='#FF9D00' height={120} width={120} /></div>
    }
    return (
      <div className='map'>
        {maps.map(map =>
          <div className='map-padding'>
            <Image onClick={this.props.oneMap} id={map.id} key={map.id} src={map.map_image} className='map-image-size' />
            <div onClick={this.props.oneMap} id={map.id} key={map.id} className='map-name-container'>
              <span onClick={this.props.oneMap} id={map.id} key={map.id} className='map-font'>{map.map_name} </span>
              <span onClick={this.props.oneMap} id={map.id} key={map.id} className='map-font-type'>- {map.map_type}</span>    
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MapThumbnail;