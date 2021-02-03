import axios from 'axios';
import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
}
    from 'react-places-autocomplete';
import { connect } from 'react-redux';
import * as gActions from '../actions/gapi_actions'


class GapiAutoFillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng)
                if(this.props.field === 'Origin')
                    this.props.originToState(latLng);
                else if( this.props.field == 'Destination')
                    this.props.destinationToState(latLng); 
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <div>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    type={this.props.field}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading, type=this.props.type }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: `${type}`,
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
        );
    }
}


const mstp = (state, ownProps) => {
    return{}

}

const mdtp = dispatch => {
    return {
        originToState: coord => dispatch(gActions.originToState(coord)),
        destinationToState: coord => dispatch(gActions.destinationToState(coord))
    }
}

export default connect(mstp, mdtp)(GapiAutoFillForm);