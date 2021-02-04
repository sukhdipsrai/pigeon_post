import { connect } from 'react-redux'
import { fetchDriverTasks, updateTask } from '../../actions/task_actions'

import CurrentDelivery from './current_delivery'

const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.user)[0],
        tasks: state.entities.tasks,
    }
}

const mDTP = dispatch => {
    return {
        fetchDriverTasks: (id) => dispatch(fetchDriverTasks(id)),
        completeTask: task => dispatch(updateTask(task))
    }
}


export default connect(mSTP, mDTP)(CurrentDelivery)

