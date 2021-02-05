import React from 'react'
import GapiAutoFillForm from './gapi'
import { connect } from 'react-redux'
import axios from 'axios';
import { createTask } from '../../actions/task_actions'
import * as gActions from '../../actions/gapi_actions'
import '../../stylesheets/gapiform.css'
import { closeModal } from '../../actions/modal_actions'
const gDistance = require('google-distance-matrix');
const GOOGLE_API_KEY_EXP = require('../../config/keys').googlekeyS
const GOOGLE_API_KEY = require('../../config/keys').googlekey
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

    frontEndDistanceMatrix(body){
        return new Promise (function(Resolve, Reject){
            let that=this;
            const { ori, dist } = body;
            let res={};
            gDistance.key(GOOGLE_API_KEY_EXP);
            gDistance.matrix(ori,dist, "DRIVING", (err, distances)=>{
                if (!err)  Resolve(distances.rows)
                else Reject(err,"Matrix Api Error");
            })
        })
    }

    getDist(ori, dist) {
        let that = this;

        axios.post('/api/gapi/distance', {ori,dist} )
        // this.frontEndDistanceMatrix({ ori, dist })
            .then(res => {
                console.log(res)
                const json = res.data.rows[0].elements[0];
                const distance = json.distance.value;
                const duration = json.duration.value;
                const weight = that.state.weight;
                that.setState({
                    apiCall: json,
                    distance,
                    duration,
                    price: this.calcPrice(0, weight, distance, duration)
                })
            }).then(() => this.validateForm())
            .catch(err => {
                console.log(err)
                that.setState({ errors: err })
            });
    }

    handleSubmit() {
        let errors = null;
        let that = this;
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
            let ori = pickup_loc.latLng;
            let dist = dropoff_loc.latLng;
            // dist = { lat: 40.7198865, lng: -73.6522537 }
            // ori = { lat: 40.7121554, lng: -73.8264545 }
            // use below for gmatrix package
            // let ori = [`${pickup_loc.latLng.lat},${pickup_loc.latLng.lng}`]
            // let dist = [`${dropoff_loc.latLng.lat},${dropoff_loc.latLng.lng}`]
            debugger;
            console.log(ori);
            console.log(dist);
            this.getDist(ori, dist);

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
                that.props.closeModal();
                alert("Task Created!")
            })
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
            imageUrl: 'https://pigeon-task-package.s3.us-east-2.amazonaws.com/1612498014692.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJURXHXMMONQFH73A%2F20210205%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210205T040654Z&X-Amz-Expires=604800&X-Amz-Signature=db9b795b34bda9a43354f28c6a4fd0168821e1125563b600c4febff1aad2e18b&X-Amz-SignedHeaders=host'
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
            submitButtonValue = "Confirm";
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
                </div>
        } else {
            priceDisplay = null;
        }
        return (
            <div>

                <h2>Place a Delivery here</h2>
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
                    <button className='task-form-button' onClick={() => this.props.closeModal()}>Cancel</button>

                </form>

            </div>
                        </div>
        )
    }
}

const mstp = (state, ownProps) => {
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