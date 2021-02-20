import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { openModal } from "../../actions/modal_actions";
const mSTP = (state, ownProps) => {
  return {
    currentUser: Object.values(state.entities.user)[0],
    isloggedin: state.session.isAuthenticated,
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Sidebar);
