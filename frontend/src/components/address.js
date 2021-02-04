import React from "react"
import PlacesAutoComplete, { geocodeByAdress, getLatLng } from 'react-places-autocomplete'

export default function Address(){
    const [address, setAddress] = React.useState("");

    const handleSelect = async value => {}


    return (
        <div>
            <PlacesAutoComplete>
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            </PlacesAutoComplete>

        </div>
    )
    
}