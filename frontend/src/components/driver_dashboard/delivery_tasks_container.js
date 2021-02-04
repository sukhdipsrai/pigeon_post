import { connect } from 'react-redux'
import {fetchTasks, updateTask} from '../../actions/task_actions'
import DeliveryTasksIndex from './deliver_tasks_index'

const mSTP = (state, ownProps) => {
    return {
        tasks: state.entities.tasks,
        currentUser: Object.values(state.entities.user)[0],

    }
}

const mDTP = dispatch => {
    return {
        fetchTasks: () => dispatch(fetchTasks()),
        claimTask: task => dispatch(updateTask(task))
    }
}


export default connect(mSTP, mDTP)(DeliveryTasksIndex)

