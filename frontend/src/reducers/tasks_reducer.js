import { RECEIVE_ALL_TASKS, 
    RECEIVE_SINGLE_USER_TASKS,
    RECEIVE_NEW_TASK } 
    from '../actions/task_actions'

    const defaultState = ({
        all: {},
        user: {},
        new: undefined
    })

    const TasksReducer = ( oldState = defaultState, action ) => {
        Object.freeze(oldState)
        let newState = Object.assign({}, oldState)
        switch (action.type) {
            case RECEIVE_ALL_TASKS:
                newState.all = action.tasks.data
                return newState;
            case RECEIVE_SINGLE_USER_TASKS:
                newState.user = action.tasks.data
                return newState
            case RECEIVE_NEW_TASK:
                newState.new = action.task.data 
                return newState       
            default:
                return oldState;
        }
    }

    export default TasksReducer