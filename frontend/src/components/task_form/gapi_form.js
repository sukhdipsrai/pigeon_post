import React from "react";
import GapiAutoFillForm from "./gapi";
import { connect } from "react-redux";
import axios from "axios";
import { createTask } from "../../actions/task_actions";
import * as gActions from "../../actions/gapi_actions";
import "../../stylesheets/gapiform.css";
import { closeModal } from "../../actions/modal_actions";

class GapiForm extends React.Component {
  constructor(props) {
    // console.log("gapi initialized");
    super(props);
    this.state = {
      errors: null,
      pickup_loc: null,
      dropoff_loc: null,
      drop_off_number: "",
      weight: "",
      distance: "",
      status: "unfinished",
      customer_id: this.props.user.id,
      price: null,
      apiCall: null,
      duration: "",
      matrixError: null,
      isLoading: true,
    };
    this.getDist = this.getDist.bind(this);
    this.calcPrice = this.calcPrice.bind(this);
  }
  componentWillUnmount() {
    // TODO : if see the old address when canceling the form is undesirable, uncomment line below
    this.props.resetTaskForm();
  }

  componentDidMount() {
    // function googleApiLoaded(src) {
    //   const apiString = "https://maps.googleapis.com/maps/api/js";
    //   return document.querySelector('script[src*="' + apiString + '"]')
    //     ? true
    //     : false;
    // }

    // function libraryLoad() {
    //   // debugger;
    //   const GOOGLE_API_KEY = require("../../config/keys").googlekeyS;
    //   if (document.getElementById("gapi-import") === null) {
    //     let script = document.createElement("script");
    //     script.id = "gapi-import";
    //     script.type = "text/javascript";
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    //     document.head.append(script);
    //   }
    // }
    // if (!googleApiLoaded()) libraryLoad();
    // else this.setState({ isLoading: false });

    // prevents rendering of component which will creash if window.google is not loaded from API
    const nextCheck = () => {
      setTimeout(() => {
        if (window.google === null) {
          nextCheck();
        } else this.setState({ isLoading: false });
      }, 1000);
    };
    nextCheck();
  }

  getDist(ori, dist) {
    let that = this;

    axios
      .post("/api/gapi/distance", { ori, dist })
      .then((res) => {
        // console.log(res);
        const json = res.data.rows[0].elements[0];
        if (json.status === "ZERO_RESULTS") {
          that.setState({
            errors: "Invalid Address Pair, Select a New Address",
          });
        } else {
          const distance = json.distance.value;
          const duration = json.duration.value;
          const weight = that.state.weight;
          that.setState({
            apiCall: json,
            distance,
            duration,
            price: this.calcPrice(0, weight, distance, duration),
          });
        }
      })
      .then(() => this.validateForm())
      .catch((err) => {
        // console.log(err);
        that.setState({ matrixError: err });
      });
  }

  handleSubmit() {
    let errors = [];
    const { pickup_loc, dropoff_loc } = this.props.form;
    const { weight, drop_off_number } = this.state;
    let addressBool = pickup_loc === null || dropoff_loc === null;
    let weightBool = weight === "";
    let phoneBool = drop_off_number === "";
    if (addressBool || weightBool || phoneBool) {
      if (addressBool) errors.push("Enter a Valid Pickup/Drop-off Address");
      if (weightBool) errors.push("Enter a Valid Weight");
      if (phoneBool) errors.push("Enter a Valid a Phone");

      this.setState({ errors: errors });
    } else {
      this.setState({
        pickup_loc: pickup_loc.address,
        dropoff_loc: dropoff_loc.address,
        errors: null,
      });
      let ori = pickup_loc.latLng;
      let dist = dropoff_loc.latLng;
      // dist = { lat: 40.7198865, lng: -73.6522537 }
      // ori = { lat: 40.7121554, lng: -73.8264545 }
      // use below for gmatrix package
      // let ori = [`${pickup_loc.latLng.lat},${pickup_loc.latLng.lng}`]
      // let dist = [`${dropoff_loc.latLng.lat},${dropoff_loc.latLng.lng}`]
      // debugger;
      // console.log(ori);
      // console.log(dist);
      this.getDist(ori, dist);
    }
  }

  validateForm() {
    if (this.state.weight < 1) return false;
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      const num = e.target.value;
      if (field === "drop_off_number") {
        this.setState({ [field]: this.phonefy(num), price: null });
      } else if (field === "weight")
        this.setState({ [field]: Number(num), price: null });
      else this.setState({ [field]: e.target.value, price: null });
    };
  }

  phonefy(str) {
    let re = str.match(/(\d{3})(\d{3})(\d{4})$/);
    if (re) {
      return "(" + re[1] + ") " + re[2] + "-" + re[3];
    }
    return str;
  }

  calcPrice(tips, weight, distance, duration) {
    if (weight instanceof String) weight = Number(weight);
    if (weight < 1) weight = 1;
    // distanc is always in meters, time is in seconds..
    let x = weight * 0.1 + (distance / 1000.0) * 0.75;
    let y = weight * 0.1 + (duration / 3600.0) * 25;
    // x = 50;
    // y = 60;
    if (x > y) return x.toFixed(2);
    else return y.toFixed(2);
  }

  handleFinalSubmit() {
    const that = this;
    this.createPost().then(() => {
      // debugger;
      that.props.resetTaskForm();
      that.setState({ price: null });
      that.props.closeModal();
      alert("Task Created!");
    });
  }

  createPost() {
    const {
      pickup_loc,
      dropoff_loc,
      drop_off_number,
      weight,
      distance,
      price,
      status,
      customer_id,
    } = this.state;
    const data = {
      pickup_loc: pickup_loc,
      dropoff_loc: dropoff_loc,
      drop_off_number: drop_off_number,
      weight: weight,
      distance: distance,
      price: price,
      status: status,
      customer_id: customer_id,
      api: {
        Bucket: "pigeon-task-package",
        Key: '1613521743984.jpg',
        Expires: 604800,
      },

      imageUrl:
      'https://pigeon-task-package.s3.us-east-2.amazonaws.com/1614265716426.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJURXHXMMONQFH73A%2F20210225%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210225T150836Z&X-Amz-Expires=604800&X-Amz-Signature=b54098320aa10a01d5b1f259c10a54b7a584e04c4c1fa7adf32611d3484e1aa3&X-Amz-SignedHeaders=host'
    };
    let that = this;
    return new Promise(function (resolve, reject) {
      resolve(that.props.createTask(data));
    });
  }

  formSubmit() {
    if (
      this.state.price !== null &&
      this.state.errors === null &&
      this.props.form.pickup_loc !== null &&
      this.props.form.dropoff_loc !== null &&
      this.state.pickup_loc === this.props.form.pickup_loc.address &&
      this.state.dropoff_loc === this.props.form.dropoff_loc.address
    )
      this.handleFinalSubmit();
    else this.handleSubmit();
  }

  render() {
    let priceDisplay = null;
    const {
      pickup_loc,
      dropoff_loc,
      drop_off_number,
      weight,
      distance,
      price,
      // status,
      // customer_id,
      duration,
    } = this.state;

    let cancelButton = (
      <button
        className="task-form-button"
        id="cancel"
        onClick={() => this.props.closeModal()}
      >
        Cancel
      </button>
    );

    let editButton = (
      <button
        className="task-form-button"
        id="edit"
        onClick={() => this.setState({ price: null })}
      >
        Edit
      </button>
    );

    let submitButton = (
      <button
        type="submit"
        id="submit"
        className="task-form-button"
        onClick={() => this.formSubmit()}
      >
        Submit
      </button>
    );

    let confirmButton = (
      <input
        type="submit"
        id="confirm"
        value={"Confirm"}
        className="task-form-button"
      />
    );

    let errorsDisplay = null;
    if (this.state.errors !== null)
      errorsDisplay = this.state.errors.map((err, i) => {
        return <li key={i}>{err}</li>;
      });
    let matrixErrorsDisplay = null;
    if (this.state.matrixError !== null) {
      matrixErrorsDisplay = <li>{this.state.matrixError}</li>;
    }

    if (
      this.state.price !== null &&
      this.state.errors === null &&
      this.props.form.pickup_loc !== null &&
      this.props.form.dropoff_loc !== null &&
      pickup_loc === this.props.form.pickup_loc.address &&
      dropoff_loc === this.props.form.dropoff_loc.address
    ) {
      priceDisplay = (
        <div className="price-display-box">
          <div className="form-submit-details" id="form-price">
            <p>Price Determined </p> <p>${price}</p>
          </div>
          <div className="form-submit-details" id="form-distance">
            <p>Based on Distance: </p>{" "}
            <p> {(distance * 0.00062137).toFixed(2)} mi.</p>
          </div>
          <div className="form-submit-details" id="form-duration">
            <p>Based on Route Duration: </p>{" "}
            <p>{Math.ceil(duration / 60)} Minutes</p>
          </div>
          <div className="form-submit-details" id="form-weight">
            <p>Based on Estimated Weight: </p> <p>{weight} lbs.</p>
          </div>
          <div className="form-submit-details" id="form-start">
            <p>Start Location: </p> <p> {pickup_loc}</p>
          </div>
          <div className="form-submit-details" id="form-end">
            <p>Dropoff Location: </p> <p>{dropoff_loc}</p>
          </div>
          <div className="form-submit-details" id="form-contact">
            <p>Delivery Contact:</p> <p> {drop_off_number}</p>
          </div>
          <div className="confirm-buttons">
            {cancelButton}
            {editButton}
            {submitButton}
          </div>
        </div>
      );
    }
    // TODO: add an animation or something fancier
    if (this.state.isLoading) return <div>Loading...</div>;

    if (!priceDisplay)
      return (
        <div>
          <h2>Place a Delivery here</h2>
          <div className="task-form-container">
            <form onSubmit={() => this.formSubmit()} className="task-form">
              <br />
              <input
                type="tel"
                pattern="\(([0-9]{3})\) [0-9]{3}-[0-9]{4}"
                value={this.state.drop_off_number}
                onChange={this.update("drop_off_number")}
                placeholder="Recipient Phone Number"
              />
              <br />
              <label>
                <input
                  type="number"
                  value={this.state.weight}
                  onChange={this.update("weight")}
                  min={1}
                  placeholder="Weight of Package in Pounds"
                />
              </label>
              <br />
              <GapiAutoFillForm type="Origin" field="Pick Up Location" />
              <br></br>
              <GapiAutoFillForm
                type={"Destination"}
                field="Drop Off Location"
              />
              <br></br>
              <ul className="task-form-errors">
                {errorsDisplay}
                {matrixErrorsDisplay}
              </ul>
              <div className="confirm-buttons">
                {confirmButton}
                {cancelButton}
              </div>
            </form>
          </div>
        </div>
      );
    else return priceDisplay;
  }
}

const mstp = (state, ownProps) => {
  return {
    form: state.task_form,
    user: state.entities.user,
    // history: ownProps.history
  };
};

const mdtp = (dispatch) => {
  return {
    createTask: (data) => dispatch(createTask(data)),
    resetTaskForm: (data) => dispatch(gActions.resetTaskForm()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(GapiForm);
