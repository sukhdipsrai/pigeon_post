import axios from 'axios' 


export const getTasks = () => {
    return axios.get('/api/tasks/', );
}

export const getUserTasks = id => {
    // debugger
    return axios.get(`/api/tasks/user/${id}`)
}

export const getDriverTasks = id => {
    return axios.get(`/api/tasks/driver/${id}`)
}

export const getTask = id => {
    return axios.get(`/api/tasks/${id}`)
}

export const writeTask = data => {
    return axios.post('/api/tasks/create', data)
}

export const editTask = data=> {
    // debugger
    return axios.put(`/api/tasks/${data._id}/edit`, data)
}

export const removeTask = id => {
    return axios.delete(`/api/tasks/${id}`)
}