import {connect} from 'react-redux'
import Sidebar from './sidebar'
const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.user)[0],
        isloggedin: state.session.isAuthenticated
    }
}

const mDTP = (dispatch) => {
    return {

    }
}

export default connect(mSTP, mDTP)(Sidebar)