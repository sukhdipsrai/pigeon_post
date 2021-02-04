import React from 'react'

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
                debugger
                console.log(this.state.currentTask.status)
                this.state.currentTask.status = "In Process";
                this.state.currentTask.driver_id = this.props.driverId
                console.log(this.state.currentTask.status)
                this.props.claimTask(this.state.currentTask).then(window.location.reload())
                debugger
        }

        render(){
            return(

                      <div>
                            <h1> pickup: {this.props.task.pickup_loc}</h1>
                            <h1>dropoff: {this.props.task.dropoff_loc}</h1>
                            <h1>payout: ${this.props.task.price}</h1>
                            <h1>{this.state.currentTask.status}</h1>
                            <h1>{this.state.currentTask.driver_id}</h1>
                            <button onClick={() => this.handleClick()} >Claim this delivery</button>
                        <br/>
                        <br/>
                     </div>
                )
        }

    }

export default DeliveryIndexItem