import React from "react";
import "../../stylesheets/current_delivery.css";
class CurrentDeliveryItem extends React.Component {
  // const DeliveryIndexItem = ({ claimTask, task }) => (
  constructor(props) {
    super(props);
    this.state = {
      currentTask: props.task,
    };
    this.completed = false;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // debugger
    console.log(this.state.currentTask.status);
    this.state.currentTask.status = "Finished";
    this.state.currentTask.driver_id = this.props.driverId;
    console.log(this.state.currentTask.status);
    this.props.completeTask(this.state.currentTask).then();
    this.completed = true;
    debugger;
  }
  componentWillUnmount() {
    if (this.completed) this.props.fetchDriverTasks(this.props.driverId);
  }

  render() {
    return (
      <div className="current-delivery-item">
        {/* <div className="addresses"> */}

        <h2> Pick-Up: {this.props.task.pickup_loc}</h2>
        <h2>Drop-Off: {this.props.task.dropoff_loc}</h2>
        {/* </div> */}
        {/* <div className="right-side"> */}

        <h1>{this.state.currentTask.status}</h1>
        <h1>PigeonId: {this.state.currentTask.driver_id}</h1>
        {/* <div className="distance"> */}
        <h1>
          Distance: {(this.state.currentTask.distance / 1609).toFixed(2)} Mi
        </h1>
        <h1>Weight: {this.state.currentTask.weight} lbs.</h1>
        {/* </div> */}

        {/* <div className="payout"> */}

        {/* <div className="money"> */}
        <h1>${this.props.task.price.toFixed(2)}</h1>
        {/* </div> */}
        {/* </div> */}
        <button onClick={() => this.handleClick()}>Delivery finished</button>
        {/* </div> */}
        <br />
        <br />
      </div>
    );
  }
}

export default CurrentDeliveryItem;
