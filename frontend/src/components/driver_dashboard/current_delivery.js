import React from "react";
import CurrentDeliveryItem from "./current_delivery_item";
class CurrentDelivery extends React.Component {
  componentDidMount() {
    this.props.fetchDriverTasks(this.props.currentUser.id);
  }

  render() {
    if (this.props.tasks.length > 0) {
      let tasklist = this.props.tasks.map((task, index) => {
        if (task.status === "In Process") {
          return (
            <CurrentDeliveryItem
              driverId={this.props.currentUser.id}
              completeTask={this.props.completeTask}
              fetchDriverTasks={this.props.fetchDriverTasks}
              task={task}
              key={index}
            />
          );
        }
        return null;
      });
      return (
        <div className="current-delivery-container">
          <div className="current-delivery-main">
            <br />
            <h1>Current Delivery</h1>

            {tasklist}
          </div>
        </div>
      );
    } else {
      return <h1>This is where your current delivery is located.</h1>;
    }
  }
}

export default CurrentDelivery;
