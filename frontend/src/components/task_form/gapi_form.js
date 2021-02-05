import React from 'react'
import GapiAutoFillForm from './gapi'
import { connect } from 'react-redux'
import axios from 'axios';
import { createTask } from '../../actions/task_actions'
import * as gActions from '../../actions/gapi_actions'
import '../../stylesheets/gapiform.css'
import { closeModal } from '../../actions/modal_actions'
import { withAlert } from 'react-alert'

class GapiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: null,
            pickup_loc: null,
            dropoff_loc: null,
            drop_off_number: '',
            weight: '',
            distance: '',
            price: '',
            status: 'unfinished',
            customer_id: this.props.user.id,
            price: null,
            apiCall: null,
            duration: ''

        }
        this.getDist = this.getDist.bind(this);
        this.calcPrice = this.calcPrice.bind(this);
    }

    getDist(ori, dist) {
        let that = this;
        axios.post('/api/gapi/distance', { ori, dist })
            .then(res => {
                console.log(res)
                const json = res.data.rows[0].elements[0]
                const distance = json.distance.value;
                const duration = json.duration.value;
                const weight = that.state.weight;
                debugger;
                that.setState({
                    apiCall: json,

                    distance,
                    duration,
                    price: this.calcPrice(0, weight, distance, duration)


                })
            })
            .catch(err => that.setState({ errors: err }))
        return new Promise(function (resolve, reject) {
            resolve("Fetch Final Data.")
        })
    }

    handleSubmit() {
        let errors = null;
        const { pickup_loc, dropoff_loc } = this.props.form;
        if (pickup_loc === null || dropoff_loc === null) {
            errors = "Please Choose a Pickup AND Drop-off Address"
            this.setState({ errors: errors });
        }
        else {
            this.setState({
                pickup_loc: pickup_loc.address,
                dropoff_loc: dropoff_loc.address,
            });
            // let ori = pickup_loc.latLng;
            // let dist = dropoff_loc.latLng;
            // dist = { lat: 40.7198865, lng: -73.6522537 }
            // ori = { lat: 40.7121554, lng: -73.8264545 }
            this.getDist(pickup_loc.latLng, dropoff_loc.latLng).
                then(() => this.validateForm());
        }
    }

    validateForm() {
        if (this.state.weight < 1) return false;
    }

    update(field) {
        return e => {
            const num = e.target.value
            if (field === 'drop_off_number') {
                this.setState({ [field]: this.phonefy(num), price: null })
            }
            else if (field === 'weight') this.setState({ [field]: Number(num), price: null })
            else
                this.setState({ [field]: e.target.value, price: null })
        }
    }

    phonefy(str) {
        let re = str.match(/(\d{3})(\d{3})(\d{4})$/)
        if (re) {
            return '(' + re[1] + ') ' + re[2] + '-' + re[3]
        }
        return str;
    }

    calcPrice(tips, weight, distance, duration) {
        debugger;
        console.log(weight instanceof String);
        if (weight instanceof String) weight = Number(weight);
        if (weight < 1) weight = 1;
        // distanc is always in meters, time is in seconds..
        let x = weight * .10 + (distance / 1000.0) * .75;
        let y = weight * .10 + (duration / 3600.0) * 25;
        // x = 50;
        // y = 60;
        if (x > y) return x.toFixed(2);
        else return y.toFixed(2);
    }

    handleFinalSubmit() {
        const that = this;
        this.createPost()
            .then(() => {
                debugger;
                that.props.resetTaskForm();
                that.setState({ price: null });
                alert("Task Created!")
            })
            .then(() => {
                debugger;
                that.props.closeModal()
                // that.props.history.push("/customer_dashboard/unclaimed_delivery_container");
            }
            );
    }

    createPost() {
        const { pickup_loc, dropoff_loc, drop_off_number, weight, distance, price, status, customer_id } = this.state;
        const data = {
            pickup_loc: pickup_loc,
            dropoff_loc: dropoff_loc,
            drop_off_number: drop_off_number,
            weight: weight,
            distance: distance,
            price: price,
            status: status,
            customer_id: customer_id,
            imageUrl: 'https://pigeon-task-package.s3.us-east-2.amazonaws.com/1612488613360.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJURXHXMMONQFH73A%2F20210205%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210205T013013Z&X-Amz-Expires=900&X-Amz-Signature=8777b55c120661a7af7de0e75fd470b5c040d864b16ff03babbd18bdccbe3067&X-Amz-SignedHeaders=host'
        }
        this.props.createTask(data);
        return new Promise(function (resolve, reject) {
            resolve("Post Final Data.")
        })
    }

    formSubmit() {
        if (this.state.price !== null && this.state.errors === null)
            this.handleFinalSubmit();
        else
            this.handleSubmit()
    }

    render() {
        let priceDisplay = null;
        let submitButtonValue = "Submit"
        const { pickup_loc, dropoff_loc, drop_off_number, weight, distance, price, status, customer_id, duration } = this.state;
        if (this.state.price !== null && this.state.errors === null) {
            submitButtonValue ="Confirm and Submit";
            priceDisplay =
            <div className="price-display-box">
                <p>Price Determined {price}</p>
                <p>Based on Distance: {distance}</p>
                <p>Based on Route Duration: {duration}</p>
                <p>Based on Estimated Weight: {weight}</p>
                <p>Start Location: {pickup_loc}</p>
                <p>Dropoff Location: {dropoff_loc}</p>
                <p>Conact number for Delivery: {drop_off_number}</p>
                <p>{this.props.user.id}</p>
                <button className='task-form-button' onClick={()=>this.props.closeModal() }value="Cancel"></button>
            </div>
        } else {
            priceDisplay = null;
            debugger
        }
        return (
            <div className="task-form-container">
                <form onSubmit={() => this.formSubmit()} className="task-form">
                    <br />
                    <input type="tel"
                        pattern="\(([0-9]{3})\) [0-9]{3}-[0-9]{4}"
                        value={this.state.drop_off_number}
                        onChange={this.update('drop_off_number')}
                        placeholder="Recipient Phone Number"
                    />
                    <br /><label>
                        <input type="number"
                            value={this.state.weight}
                            onChange={this.update('weight')}
                            min={1}
                            placeholder="Weight of Package in Pounds"
                        /></label>
                    <br />
                    <GapiAutoFillForm
                        type="Origin"
                        field="Pick Up Location"
                    />
                    <br></br>
                    <GapiAutoFillForm
                        type={"Destination"}
                        field="Drop Off Location"
                    />
                    <br></br>
                    {this.state.errors}
                    {priceDisplay}
                    <input type="submit" value={submitButtonValue} className='task-form-button' />
                </form>

            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    debugger
    return {
        form: state.task_form,
        user: state.entities.user
        // history: ownProps.history
    }
}

const mdtp = dispatch => {
    return {
        createTask: data => dispatch(createTask(data)),
        resetTaskForm: data => dispatch(gActions.resetTaskForm()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(GapiForm);