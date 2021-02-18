import * as TaskUtil from "../util/tasks_api_util";

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_SINGLE_USER_TASKS = "RECEIVE_SINGLE_USER_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
// export const RECEIVE_NEW_TASK = "RECEIVE_NEW_TASK";
export const receiveTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks,
});

export const receiveUserTasks = (tasks) => ({
  type: RECEIVE_SINGLE_USER_TASKS,
  tasks,
});

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task,
});

// export const receiveNewTask = (task) => ({
//   type: RECEIVE_NEW_TASK,
//   task,
// });
export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  taskId,
});

export const fetchTasks = () => (dispatch) => {
  return TaskUtil.getTasks()
    .then((tasks) => dispatch(receiveTasks(tasks)))
    .catch((err) => console.log(err));
};

export const fetchTask = (taskId) => (dispatch) => {
  return TaskUtil.getTask(taskId)
    .then((task) => dispatch(receiveTask(task)))
    .catch((err) => console.log(err));
};

export const fetchUserTasks = (id) => (dispatch) => {
  return TaskUtil.getUserTasks(id)
    .then((tasks) => dispatch(receiveUserTasks(tasks)))
    .catch((err) => console.log(err));
};

export const fetchDriverTasks = (id) => (dispatch) => {
  return TaskUtil.getDriverTasks(id)
    .then((tasks) => dispatch(receiveUserTasks(tasks)))
    .catch((err) => console.log(err));
};

export const createTask = (task) => (dispatch) => {
  return TaskUtil.writeTask(task)
      .then((tasks) => dispatch(receiveUserTasks(task.customer_id)))
    .catch((err) => console.log(err));
};

export const updateTask = (task) => (dispatch) => {
  // debugger
  return TaskUtil.editTask(task)
    .then((task) => dispatch(receiveTask(task)))
    .catch((err) => console.log(err));
};

export const deleteTask = (taskId) => (dispatch) => {
  return TaskUtil.removeTask(taskId)
    .then((taskId) => dispatch(removeTask(taskId)))
    .catch((err) => console.log(err));
};
