import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://66.228.56.214:3000'
})

export default axiosInstance