

import React from 'react' 
// import '../../stylesheets/customer_active_delivery_container.css'
class CurrentDelivery extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return(
            <div className="active-delivery-main">
                <h1>This is where your current delivery is located.</h1>
            </div>
        )
    }
}

export default CurrentDelivery
