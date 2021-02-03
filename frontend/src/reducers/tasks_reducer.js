import { RECEIVE_ALL_TASKS, 
    RECEIVE_SINGLE_USER_TASKS,
    RECEIVE_TASK,
    REMOVE_TASK } 
    from '../actions/task_actions'

  const defaultState = ({
        all: {},
        user: {},
        new: undefined
    })

    const TasksReducer = ( oldState = {}, action ) => {
        Object.freeze(oldState)
        let newState = Object.assign({}, oldState)
        switch (action.type) {
            case RECEIVE_ALL_TASKS:
                // newState.all = action.tasks.data
                return action.tasks;
            case RECEIVE_SINGLE_USER_TASKS:
                // newState.user = action.tasks.data
                return action.tasks
            case RECEIVE_TASK:
                // newState.new = action.task.data 
                return Object.assign({}, oldState, action.task)
            case REMOVE_TASK:
                delete newState[action.task._id];
                return newState     
            default:
                return oldState;
        }
    }

    export default TasksReducer