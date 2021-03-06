import React from "react";
import DeliveryIndexItem from "./delivery_task_index_item";
import "../../stylesheets/driver_delivery_index.css";

class DeliveryTasksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    // debugger
    if (this.props.tasks.length > 0) {
      let tasklist = this.props.tasks.map((task, index) => {
        if (task.driver_id === "null") {
          return (
            <DeliveryIndexItem
              driverId={this.props.currentUser.id}
              claimTask={this.props.claimTask}
              fetchTasks={this.props.fetchTasks}
              task={task}
              key={index}
            />
          );
        } else return null;
      });

      return (
        <div className="active-delivery-main">
          <h1>Active Deliveries</h1>
          <div className="inner-delivery-main">{tasklist.reverse()}</div>
        </div>
      );
    } else {
      return <div className="active-delivery-main"></div>;
    }
  }
}

export default DeliveryTasksIndex;
