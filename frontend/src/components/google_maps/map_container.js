import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.data!==null)
    this.state.data = this.props.data;
  }

  addressToCord(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        return latLng;
      })
      .catch(error => console.error('Error', error));
  }

  componentDidMount() {
    debugger;   
  }
  render() {
    let { data } = this.props
    let displayTasks = null;
    let that = this;
    const style = {
      width: '75%',
      height: '75vh'
    }
    if (data !== null) {
      displayTasks = data.map(task => {
        <Marker>
          key={task.id}
          position={() => this.addressToCord(task.loc)}
          name={task.id}
        </Marker>
      })
    }

    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={14}
        initialCenter={{
          lat: 40.754885,
          lng: -74.081807
        }}
      >

      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyAGCbX3hgsPnsWfUJwle8aco46J2G_P9I0')
})(MapContainer)