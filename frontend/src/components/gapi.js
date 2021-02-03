import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
const GOOGLE_MAPS_API_KEY = "AIzaSyCLZHODuHiiEicmkIspcTrjtQQmmviO9S8"


class Gapi extends React.Component{
    constructor(props){
        super(props);
        // this.state ={
        //     matrix:{
        //         lat: 0,
        //         lang:0,
        //         travelMode:''
        //     }
        // }
    }



    render(){

        
        const {google} = this.props
        const origins = "Washington, DC, USA"
        const destinations = "New York, NY, USA"
        const travelMode = 'driving'
        let disres = "";
        axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=H8MW%2BWP%20Kolkata%20India&destinations=GCG2%2B3M%20Kolkata%20India&key=${GOOGLE_MAPS_API_KEY}`)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
       return(
           <div>
               {disres}
           </div>
       )
        
    }
    
}



export default Gapi;