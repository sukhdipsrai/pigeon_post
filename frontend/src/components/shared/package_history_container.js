import { connect } from "react-redux";
import { fetchUserTasks, fetchDriverTasks } from "../../actions/task_actions";
import PackageHistory from "./package_history";
import "../../stylesheets/customer_history.css";

const mSTP = (state, ownProps) => {
  return {
    currentUser: Object.values(state.entities.user)[0],
    tasks: state.entities.tasks,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCustomerTasks: (customerId) => dispatch(fetchUserTasks(customerId)),
    fetchDriverTasks: (driverId) => dispatch(fetchDriverTasks(driverId)),
  };
};

export default connect(mSTP, mDTP)(PackageHistory);
