import axios from 'axios' 


export const getTasks = () => {
    return axios.get('/api/', );
}

export const getUserTasks = id => {
    return axios.get(`/api/tasks/user/${id}`)
}

export const writeTask = data => {
    return axios.post('/api/tasks/', data)
}