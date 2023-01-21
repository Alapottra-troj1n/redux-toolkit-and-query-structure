import axios from "axios";

export const productAPI = axios.create({
    baseURL: 'http://localhost:5000/'
})

