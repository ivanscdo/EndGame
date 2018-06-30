// /*global google*/
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0,
    }
  }

  componentDidMount() {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    });
  }
  
  render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        <button onClick={() => console.log(this.state)}>click me</button>
      </div>
   );
   }
};
export default Map;
