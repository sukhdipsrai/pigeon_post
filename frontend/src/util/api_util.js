import axios from 'axios';



export const test = ()=>{
    return axios.get('/api/drivers/test');
}

//'http://localhost:5000/api/drivers/test'