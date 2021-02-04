import { connect } from "react-redux"
import TaskShowPage from './task_show_page'
import {fetchTask} from '../actions/task_actions'
const mSTP = (state, ownProps) => {
    debugger
    let taskId = ownProps.match.params.taskId
    return {
        taskId,
        tasks: Object.values(state.entities.tasks)[0],
    }
}

const mDTP = dispatch => {
    return {
        fetchTask: id => dispatch(fetchTask(id))
    }
}

export default connect(mSTP, mDTP)(TaskShowPage)