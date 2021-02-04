import { fetchUserTasks, updateTask } from '../../actions/task_actions'

import { connect } from 'react-redux'
import UnclaimedDelivery from './unclaimed_delivery'

const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.user)[0],
        tasks: state.entities.tasks
    }
}

const mDTP = dispatch => {
    return {
        fetchUserTasks: (id) => dispatch(fetchUserTasks(id)),

    }
}


export default connect(mSTP, mDTP)(UnclaimedDelivery)

