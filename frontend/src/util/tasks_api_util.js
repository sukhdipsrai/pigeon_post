import axios from 'axios' 


export const getTasks = () => {
    return axios.get('/api/tasks/', );
}

export const getUserTasks = id => {
    return axios.get(`/api/tasks/user/${id}`)
}

export const getTask = id => {
    return axios.get(`/api/tasks/${id}`)
}

export const writeTask = data => {
    return axios.post('/api/tasks/create', data)
}

export const editTask = data=> {
    return axios.put(`/api/tasks/${data.id}/edit`, data)
}

export const removeTask = id => {
    return axios.delete(`/api/tasks/${id}`)
}