import axios from 'axios';

import { USER_TOKEN } from '../components/constants/local';
import { isAuthenticated } from './utilities';

const headers = {
    "Content-Type": "application/json",
    accept: "application/json"
}

const token = JSON.parse(localStorage.getItem(USER_TOKEN))

if(token || isAuthenticated()){
    headers['Authorization'] = `Bearer ${token}`
}

const axiosInstance = axios.create({
    baseURL: 'https://api.eazicred.com',
    headers,
    // timeout: 30000,
    timeoutErrorMessage: "timeout()"
})

export default axiosInstance