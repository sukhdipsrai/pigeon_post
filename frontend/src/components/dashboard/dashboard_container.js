import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { logout } from "../../actions/session_actions";
import {
  fetchDriverTasks,
  fetchUserTasks,
  fetchTasks,
} from "../../actions/task_actions";

// import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUser: Object.values(state.entities.user)[0],
    tasks: state.entities.tasks,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchUserTasks: (id) => dispatch(fetchUserTasks(id)),
    fetchDriverTasks: (id) => dispatch(fetchDriverTasks(id)),
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

export default connect(mSTP, mDTP)(Dashboard);
