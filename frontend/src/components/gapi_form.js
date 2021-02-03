import React from 'react'
import Gapi from './gapi'
class GapiForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            matrix:{
                lat:0,
                long:0,
                travelMode:''
            }
        }
    }

    render(){

        return(
            <div>
                This is the GapiForm
                <Gapi
        
                />
            </div>
        )
    }
}

export default GapiForm;