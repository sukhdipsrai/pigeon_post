import React from 'react'
import {Link} from 'react-router-dom'

class DeliveryIndexItem extends React.Component {
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
                this.state.currentTask.status = "In Process";
                this.state.currentTask.driver_id = this.props.driverId
                console.log(this.state.currentTask.status)
                this.props.claimTask(this.state.currentTask).then(window.location.reload())
                // debugger
        }

        render(){
            return(
                // <Link className="links" to={`/tasks/${this.props.task._id}`}>

                      <div className="index-item">
                          <div className="addresses">

                            <h2> pickup: {this.props.task.pickup_loc}</h2>
                            <h2>dropoff: {this.props.task.dropoff_loc}</h2>
                          </div>
                          <div className="right-side">

                            {/* <h1>{this.state.currentTask.status}</h1> */}
                            {/* <h1>{this.state.currentTask.driver_id}</h1> */}
                            <div className="distance">
                            <h1>{(this.state.currentTask.distance/1609.0).toFixed(1)}</h1>
                                <p>Mi</p>
                            </div>
                            
                            <div className="payout">

                                    <div className="money">
                                        <p>$</p>
                                        <h1>{this.props.task.price.toFixed(2)}</h1>
                                    </div>
                                    <span>payout</span>
                            </div>
                            <button onClick={() => this.handleClick()} >Claim this delivery</button>
                          </div>
                        <br/>
                        <br/>
                     </div>
                    //  {/* </Link> */}
                )
        }

    }

export default DeliveryIndexItem