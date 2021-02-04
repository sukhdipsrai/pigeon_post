import { connect } from 'react-redux'
import { fetchDriverTasks } from '../../actions/task_actions'

import CurrentDelivery from './current_delivery'

const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.user)[0],
    }
}

const mDTP = dispatch => {
    return {
        fetchDriverTasks: (id) => dispatch(fetchDriverTasks(id)),
    }
}


export default connect(mSTP, mDTP)(CurrentDelivery)

