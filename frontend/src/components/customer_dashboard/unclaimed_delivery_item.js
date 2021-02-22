import React from "react";
// import '../../stylesheets/current_delivery.css'
import { Link } from "react-router-dom";
class UnclaimedDeliveryItem extends React.Component {
  // const DeliveryIndexItem = ({ claimTask, task }) => (
  constructor(props) {
    super(props);
    this.state = {
      currentTask: props.task,
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleted = false;
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // debugger;
    this.deleted = true;
    this.props.deleteTask(this.props.task._id);
  }

  componentWillUnmount() {
    if (this.deleted) this.props.fetchUserTasks(this.props.userId);
  }

  componentDidMount(){
    this.props.fetchUserTasks(this.props.userId);
  }

  render() {
    return (
      <div className="unclaimed-main">
        <Link className="links" to={`/tasks/${this.props.task._id}`}>
          <div className="unclaimed-delivery-item">
            <div className="unclaimed-holder">
              {/* <div className="package-info">
                            <div className="div-for-photo" >
                            <div>
                            photo here
                            </div>
                            <div>
                            map here
                            
                        </div> */}
            </div>
            <div className="addresses">
              <h2>{this.props.task.pickup_loc}</h2>
              {/* ->  */}
              <h2>{this.props.task.dropoff_loc}</h2>
            </div>
            {/* </div> */}
            <div className="right-side">
              {/* <h1>{this.state.currentTask.status}</h1>
                            <h1>{this.state.currentTask.driver_id}</h1> */}
              <div className="location">
                <h1>{(this.state.currentTask.distance / 1609.0).toFixed(1)}</h1>
                <p>Mi</p>
              </div>
              <div className="payout">
                <div className="money">
                  <p>$</p>
                  <h1>{this.props.task.price.toFixed(2)}</h1>
                </div>
                <span>total</span>
              </div>
            </div>
            <br />
            <br />
          </div>
        </Link>
        <button
          className="cancel-delivery"
          onClick={() => this.handleClick()}
        >
          Cancel this delivery
        </button>
      </div>
    );
  }
}

export default UnclaimedDeliveryItem;
