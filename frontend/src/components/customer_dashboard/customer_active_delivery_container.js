import { connect } from 'react-redux'
import { fetchUserTasks, updateTask } from '../../actions/task_actions'

import CustomerActiveDelivery from './customer_active_delivery'

const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.user)[0],
        tasks: state.entities.tasks,
    }
}

const mDTP = dispatch => {
    return {
        fetchUserTasks: (id) => dispatch(fetchUserTasks(id)),
        completeTask: task => dispatch(updateTask(task))
    }
}


export default connect(mSTP, mDTP)(CustomerActiveDelivery)

