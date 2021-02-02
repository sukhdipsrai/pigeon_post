import {connect} from 'react-redux'
import Sidebar from './sidebar'
const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        isloggedin: state.session.isAuthenticated
    }
}

const mDTP = (dispatch) => {
    return {

    }
}

export default connect(mSTP, mDTP)(Sidebar)