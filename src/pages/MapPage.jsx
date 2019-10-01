import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

class MapPage extends Component {
  render() {
    return (
      this.props.map.map(map => {
        return (
          <div key={`map ${map.id}`} className='map-individual-layout'>
            <div className='map-individual-layout-upper'>
              <div className='map-critical-layout'>
                <div className='map-title-image'>
                  <h2 className='maps-used'>{map.map_name}</h2>
                  <Divider className='divider-mobile-hidden' />
                  <Image src={map.map_image} size='large' />
                  <Divider className='divider-mobile-hidden' />
                </div>
                <div className='map-critical-info'>
                  <div>
                    <h3 className='maps-used'>Location</h3>
                    <span className='home-font'>{map.map_location}</span>    
                  </div>
                  <div>
                    <h3 className='maps-used'>Type</h3>
                    <span className='home-font'>{map.map_type}</span>   
                  </div>
                </div>
              </div>
              <Divider section hidden />
              <div className='map-description-layout'>
                <div>
                  <h2 className='maps-used'>Map Description</h2>
                  <Divider className='divider-mobile-hidden' />    
                </div>
                <div className='map-description-align-center'>
                  <p className='map-description'>{map.map_description}</p>    
                </div>
              </div>
            </div>
            <div className='video-section'>
              <div className='hero-video-center'>
                <ReactPlayer url={map.map_video} controls />  
              </div>
              <Divider section hidden />
            </div>
          </div>  
        )
      })
    );
  }
}

export default MapPage;