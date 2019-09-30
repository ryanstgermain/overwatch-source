import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';

class MapPage extends Component {
  render() {
  const src = 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/94/Kings_Row_003.jpg/1600px-Kings_Row_003.jpg?version=5f0192e2b912bcd56b8cdacff9b0876c'
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
                <Divider />
                <div>
                  <h3 className='seasonal-maps-used'>Type</h3>
                  <span className='home-font'>{map.map_type}</span>   
                </div>
              </div>
            </div>
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
            <Divider section hidden />
            <div className='map-screenshot-layout'>
              <h2 className='maps-used'>Screenshots</h2>
              <Divider />
              <Image.Group className='map-screenshot-align' size='medium'>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
              </Image.Group>
              <Divider section hidden />
            </div>  
          </div>  
        )
      })
    );
  }
}

export default MapPage;