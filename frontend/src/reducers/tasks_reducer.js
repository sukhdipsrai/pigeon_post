import {
  RECEIVE_ALL_TASKS,
  RECEIVE_SINGLE_USER_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_NEW_TASK,
} from "../actions/task_actions";

const defaultState = {
  all: {},
  user: {},
  new: undefined,
};

const TasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      // newState.all = action.tasks.data
      return action.tasks.data;
    case RECEIVE_SINGLE_USER_TASKS:
      // newState.user = action.tasks.data
      // debugger
      return action.tasks.data;
    case RECEIVE_TASK:
      // newState.new = action.task.data
      // return Object.assign({}, { [action.task.data._id]: action.task.data });
      return action.tasks.data;
    // case RECEIVE_NEW_TASK:
    //   // comeback to this if need be
    //   Object.assign(newState, { [action.task.data._id]: action.task.data });
    //   return newState;
    case REMOVE_TASK:
      delete newState[action.taskId];
      return newState;
    default:
      return oldState;
  }
};

export default TasksReducer;
