import * as TaskUtil from '../util/tasks_api_util'


export const RECEIVE_ALL_TASKS ="RECEIVE_ALL_TASKS"
export const RECEIVE_SINGLE_USER_TASKS ="RECEIVE_SINGLE_USER_TASKS"
export const RECEIVE_NEW_TASK ="RECEIVE_NEW_TASK"


export const receiveTasks = tasks => ({
    type: RECEIVE_ALL_TASKS,
    tasks
})

export const receiveUserTasks = tasks => ({
    type: RECEIVE_SINGLE_USER_TASKS,
    tasks
})


export const receiveTask = task => ({
    type: RECEIVE_NEW_TASK,
    task
})


export const fetchTasks = () => dispatch => {
    return TaskUtil.getTasks()
    .then(tasks => dispatch(receiveTasks(tasks)))
    .catch(err => console.log(err))
}

export const fetchUserTasks = id => dispatch => {
    return TaskUtil.getUserTasks(id)
    .then(tasks => dispatch(receiveUserTasks(tasks)))
    .catch(err => console.log(err))
}

export const createTask = task => dispatch => {
    return TaskUtil.writeTask(task)
    .then(task => dispatch(receiveTask(task)))
    .catch(err => console.log(err))
}