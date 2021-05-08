import axios from 'axios';

import { USER_TOKEN } from '../components/constants/local';

const headers = {
    "Content-Type": "application/json",
    accept: "application/json"
}

const token = JSON.parse(localStorage.getItem(USER_TOKEN))

if(token){
    headers['Authorization'] = `Bearer ${token}`
}

const axiosInstance = axios.create({
    baseURL: 'http://66.228.56.214:3000',
    headers,
    timeout: 50000,
    timeoutErrorMessage: "Request timeout"
})

export default axiosInstance