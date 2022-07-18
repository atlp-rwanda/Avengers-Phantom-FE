import axios from 'axios'


const token = localStorage.getItem('token'); 
const backendUrl = process.env.BACKEND_URL
const config = axios.create({
    baseURL:backendUrl 
})
config.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default config;