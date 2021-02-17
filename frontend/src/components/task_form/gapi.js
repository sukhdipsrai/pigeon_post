import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { connect } from "react-redux";
import * as gActions from "../../actions/gapi_actions";

class GapiAutoFillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
    let bootstrapAddr = "";
    try {
      if (this.props.type === "Origin")
        bootstrapAddr = this.props.form.pickup_loc.address;
      else bootstrapAddr = this.props.form.dropoff_loc.address;
    } catch (e) {}

    if (bootstrapAddr === null) bootstrapAddr = "";
    this.state = { address: bootstrapAddr };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        if (this.props.type === "Origin") {
          this.setState({ address });
          this.props.originToState({ address, latLng });
        } else if (this.props.type == "Destination") {
          this.setState({ address });
          this.props.destinationToState({ address, latLng });
        }
      })
      .catch((error) => console.error("Error", error));
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
            type = this.props.field,
            selectedAddr = this.state.address,
          }) => (
            <div>
              <input
                value={selectedAddr}
                {...getInputProps({
                  placeholder: `${type}`,
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const key = suggestion.index;
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={key}
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
  return {
    form: state.task_form,
  };
};

const mdtp = (dispatch) => {
  return {
    originToState: (coord) => dispatch(gActions.originToState(coord)),
    destinationToState: (coord) => dispatch(gActions.destinationToState(coord)),
  };
};

export default connect(mstp, mdtp)(GapiAutoFillForm);
