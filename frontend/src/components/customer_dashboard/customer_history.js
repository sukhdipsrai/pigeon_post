
import React from 'react' 
import '../../stylesheets/customer_history.css'

class CustomerHistory extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return(
            <div className="history-main">
                <h1>This is where your past deliveries and receipts will be shown</h1>
            </div>
        )
    }
}

export default CustomerHistory