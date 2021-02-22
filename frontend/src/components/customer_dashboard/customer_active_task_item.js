import React from "react";
import smallpigeon from "../../images/favicon-32x32.png";

class ActiveTaskItem extends React.Component {
  render() {
    return (
      <div className="active-task-item">
        <h1>dropoff:</h1>
        {this.props.task.dropoff_loc}
        <br />
        <br />
        <h1>total weight:</h1>
        {this.props.task.weight} (lb)
        <br />
        <br />
        <h1>status:</h1>
        <div className="status">
          <p>In transit with pigeon {this.props.task.driver_id}</p>
          <img alt="" className="active-small-logo" src={smallpigeon} />
        </div>
        <div className="text-div">
          {/* <br/> */}
          {/* <p> */}
          <p>Price: ${this.props.task.price}</p>

          {/* </p> */}
        </div>
      </div>
      //   </div>
    );
  }
}

export default ActiveTaskItem;
