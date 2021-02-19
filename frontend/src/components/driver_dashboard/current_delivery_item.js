import React from "react";
import "../../stylesheets/current_delivery.css";
import smallpigeon from "../../images/favicon-32x32.png";
class CurrentDeliveryItem extends React.Component {
  // const DeliveryIndexItem = ({ claimTask, task }) => (
  constructor(props) {
    super(props);
    this.state = {
      currentTask: props.task,
    };
    this.completed = false;
    this.handleClick = this.handleClick.bind(this);
    this.myfunction = this.myfunction.bind(this);
  }
  myfunction() {
    // debugger
    let more = document.getElementById(this.props.task._id);
    if (more !== null) {
      if (more.style.display === "none") {
        more.style.display = "block";
        more.style.paddingBottom = 300;
      } else {
        more.style.display = "none";
      }
    }
  }
  handleClick() {
    // debugger
    // console.log(this.state.currentTask.status);
    this.state.currentTask.status = "Finished";
    this.state.currentTask.driver_id = this.props.driverId;
    // console.log(this.state.currentTask.status);
    this.props.completeTask(this.state.currentTask).then();
    this.completed = true;
    // debugger;
  }
  componentWillUnmount() {
    if (this.completed) this.props.fetchDriverTasks(this.props.driverId);
  }

  render() {
    return (
      <div className="current-delivery-item" onClick={() => this.myfunction()}>
        {/* <div className="addresses"> */}

        <h2> Pick-Up: {this.props.task.pickup_loc}</h2>
        <br />
        <br />
        <h2>Drop-Off: {this.props.task.dropoff_loc}</h2>
        <br />
        <br />
        {/* </div> */}
        {/* <div className="right-side"> */}

        <h1>Status: {this.state.currentTask.status}</h1>
        <br />

        <img className="active-small-logo" src={smallpigeon} />
        <div className="status">
          {/* <button onClick={() => this.myfunction()}>Show more</button> */}
        </div>
        <div id={this.props.task._id} style={{ display: "none" }}>
          <div id="more">
            <div className="text-div">
              {/* <br/> */}
              {/* <p> */}
              <h2>pigeon id:</h2>
              {this.state.currentTask.driver_id}
              <br />
              <br />
              <h2>mailer id:</h2>
              {this.props.task.customer_id}
              <br />
              <br />
              <h2>distance:</h2>
              {(this.state.currentTask.distance / 1609).toFixed(2)} Mi
              <br />
              <br />
              <h2>total weight:</h2> {this.state.currentTask.weight} lbs.
              <br />
              <br />
              <h2>payout:</h2> ${this.props.task.price.toFixed(2)}
            </div>
          </div>
          <br />
        </div>
        <button onClick={() => this.handleClick()}>Mission Complete</button>
        {/* </div> */}
      </div>
    );
  }
}

export default CurrentDeliveryItem;
