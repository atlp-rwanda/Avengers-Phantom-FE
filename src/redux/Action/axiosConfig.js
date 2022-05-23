import axios from 'axios'


const token = localStorage.getItem('token'); 

const config = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})
config.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default config;