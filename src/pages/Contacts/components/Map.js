import React, {Component} from 'react';
import fancy from '../../../styles/fancy-map.json';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

class Map extends Component {

  render() {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 47.0331512, lng: 28.842703}}
        defaultOptions={{
          styles: fancy,
          disableDefaultUI: true,
        }}
        >
        <Marker
          position={{lat: 47.0331512, lng: 28.842703}}
        />
      </GoogleMap>
    )
  }
}

export default (withScriptjs(withGoogleMap(Map)));
