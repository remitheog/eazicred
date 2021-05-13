import axios from 'axios';

//
// import { USER_TOKEN } from '../constants/local';
//
// const headers = {
//     "Content-Type": "application/json",
//     accept: "application/json"
// }
//
// const token = JSON.parse(localStorage.getItem(USER_TOKEN))
//
// if(token){
//     headers['Authorization'] = `Bearer ${token}`
// }

const axiosInstance = axios.create({
    baseURL: 'https://api.eazicred.com',
})

export default axiosInstance