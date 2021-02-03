import React from 'react'
import GapiAutoFillForm from './gapi'

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
                <GapiAutoFillForm
                    type="origin"
                />
                <GapiAutoFillForm
                    type={"destination"}
                />
            </div>
        )
    }
}

export default GapiForm;