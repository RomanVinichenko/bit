import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://btcdo.online/api'
})

export default axiosInstance