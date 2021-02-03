import React from 'react'
import GapiAutoFillForm from './gapi'

class GapiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            form: {
                pickup_loc: '',
                dropoff_loc: '',
                drop_off_number: '',
                weight: '',
                distance: '',
                price: '',
                status: 'unfinished',
                customer_id: ''
            }
        }
    }

    // getDist() {
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=H8MW%2BWP%20Kolkata%20India&destinations=GCG2%2B3M%20Kolkata%20India&key=${GOOGLE_MAPS_API_KEY}`)
    //         .then(res => console.log(res.data.rows[0]))
    //         .catch(err => console.log(err))
    // }

    handleSubmit() {

    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })

        }
    }


    render() {

        return (
            <div>
                <h2>Create Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <input type="tel"
                        value={this.state.email}
                        onChange={this.update('drop_off_number')}
                        placeholder="Recipient Phone Number"
                    />
                    <br />
                    <input type="text"
                        value={this.state.firstname}
                        onChange={this.update('weight')}
                        placeholder="Weight of Package"
                    />
                    <br />
                    <GapiAutoFillForm
                        type="Origin"
                    />
                    <GapiAutoFillForm
                        type={"Destination"}
                    />
                    <input type="submit" value="Submit" />
                </form>


            </div>
        )
    }
}

export default GapiForm;