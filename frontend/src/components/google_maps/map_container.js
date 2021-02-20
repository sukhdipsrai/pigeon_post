import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";
// import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "../../stylesheets/dashboard.css";
const GOOGLE_API_KEY = require("../../config/keys").googlekeyS;
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // addressToCord(address) {
  //   geocodeByAddress(address)
  //     .then((results) => getLatLng(results[0]))
  //     .then((latLng) => {
  //       // console.log("Success", latLng);
  //       return latLng;
  //     })
  //     .catch((error) => console.error("Error", error));
  // }

  componentDidMount() {}
  render() {
    const style = {
      width: "100%",
      height: "100%",
    };
    return (
      // <div className="map-component-holder">

      <Map
        google={this.props.google}
        style={style}
        zoom={10}
        initialCenter={{
          lat: 40.754885,
          lng: -73.91223907,
        }}
      >
        <Marker position={{ lat: 40.69677842, lng: -73.91223907 }} />
        {/* <Marker
          position={{ lat: 37.759703, lng: -72.428093 }} /> */}
        <Marker position={{ lat: 40.69807989, lng: -73.93987656 }} />
        <Marker position={{ lat: 40.68402262, lng: -73.81387711 }} />
        <Marker position={{ lat: 40.73503114, lng: -73.8574791 }} />
        <Marker position={{ lat: 40.8234226, lng: -73.86949539 }} />
      </Map>
      // {/* </div> */}
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapContainer);
