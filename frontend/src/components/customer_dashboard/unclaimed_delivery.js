import React from "react";
import UnclaimedDeliveryItem from "./unclaimed_delivery_item";
import "../../stylesheets/unclaimed_delivery.css";
class UnclaimedDelivery extends React.Component {
  componentDidMount() {
    this.props.fetchUserTasks(this.props.currentUser.id);
  }

  render() {
    if (this.props.tasks.length > 0) {
      let tasklist = this.props.tasks.map((task, index) => {
        if (task.driver_id === "null" && task.status === "unfinished") {
          return (
            <UnclaimedDeliveryItem
              userId={this.props.currentUser.id}
              task={task}
              deleteTask={this.props.deleteTask}
              fetchUserTasks={this.props.fetchUserTasks}
              key={index}
            />
          );
        } else return null;
      });

      return (
        <div className="unclaimed-delivery-main">
          <h1>This is where your Unclaimed deliveries will be shown</h1>
          <div className="task-list-holder">{tasklist.reverse()}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default UnclaimedDelivery;
