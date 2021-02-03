
import React from 'react' 
import '../../stylesheets/customer_unclaimed_delivery_container.css'
class UnclaimedDelivery extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return(
            <div className="unclaimed-delivery-main">
                <h1>This is where your Unclaimed deliveries will be shown</h1>
            </div>
        )
    }
}

export default UnclaimedDelivery