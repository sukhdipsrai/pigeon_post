import React from 'react'
import '../../stylesheets/current_delivery.css'
class CurrentDeliveryItem extends React.Component {
// const DeliveryIndexItem = ({ claimTask, task }) => (
        constructor(props) {
            super(props)
            this.state = {
                currentTask: props.task
            }

            this.handleClick = this.handleClick.bind(this)
        }

        handleClick() {
                // debugger
                console.log(this.state.currentTask.status)
                this.state.currentTask.status = "Finished";
                this.state.currentTask.driver_id = this.props.driverId
                console.log(this.state.currentTask.status)
                this.props.completeTask(this.state.currentTask).then(window.location.reload())
                // debugger
        }

        render(){
            return(

                      <div className="current-delivery-item">
                          {/* <div className="addresses"> */}

                            <h2> pickup: {this.props.task.pickup_loc}</h2>
                            <h2>dropoff: {this.props.task.dropoff_loc}</h2>
                          {/* </div> */}
                          {/* <div className="right-side"> */}

                            <h1>{this.state.currentTask.status}</h1>
                            <h1>{this.state.currentTask.driver_id}</h1>
                            {/* <div className="distance"> */}
                                <h1>{this.state.currentTask.distance}</h1>
                                <h1>{this.state.currentTask.weight}</h1>
                                <p>Mi</p>
                            {/* </div> */}
                            
                            {/* <div className="payout"> */}

                                    {/* <div className="money"> */}
                                        <p>$</p>
                                        <h1>{this.props.task.price.toFixed(2)}</h1>
                                    {/* </div> */}
                                    <span>payout</span>
                            {/* </div> */}
                            <button onClick={() => this.handleClick()} >Delivery finished</button>
                          {/* </div> */}
                        <br/>
                        <br/>
                     </div>
                )
        }

    }

export default CurrentDeliveryItem