import { connect } from 'react-redux';
import Navbar from './navbar'
import { logout } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return {
            currentUser: Object.values(state.entities.user)[0],
            isloggedin: state.session.isAuthenticated
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Navbar)