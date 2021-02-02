import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        currentUser: state.session.user,
    }
}

const mDTP = (dispatch, ownProps) => {

    return {
        // openModal: (modal) => dispatch(openModal(modal)),
        // closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(Dashboard);