import React from 'react' 



class PackageHistoryItem extends React.Component {

    constructor(props){
        super(props)
    }



    render(){
        return (
            <div className="package-history-item">
                          {/* <div className="addresses"> */}
                            
                            <h2> pickup: </h2>{this.props.task.pickup_loc}
                            <h2>dropoff: </h2>{this.props.task.dropoff_loc}
                            <h2>pigeon id:</h2>{this.props.task.driver_id}
                            <h2>mailer id:</h2>{this.props.task.customer_id}
                            <h2>distance:</h2>{(this.props.task.distance/1609.0).toFixed(1)}Mi
                            <h2>payout:</h2> ${this.props.task.price.toFixed(2)}
                            {/* <span>payout</span> */}
                        <br/>
                        <br/>
                            date posted: {this.props.task.date_posted}
                            <br/>
                            date completed: {this.props.task.updatedAt}
                     </div>
        )
    }
}


export default PackageHistoryItem