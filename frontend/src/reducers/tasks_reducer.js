import {
  RECEIVE_ALL_TASKS,
  RECEIVE_SINGLE_USER_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_NEW_TASK,
} from "../actions/task_actions";

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
      return Object.assign({}, { [action.task.data._id]: action.task.data });
    case RECEIVE_NEW_TASK:
      let arrayState = Object.values(newState);
      arrayState.push(action.task.data);
      return arrayState;
    case REMOVE_TASK:
      // debugger
      delete newState[action.taskId];
      return newState;
    default:
      return oldState;
  }
};

export default TasksReducer;
