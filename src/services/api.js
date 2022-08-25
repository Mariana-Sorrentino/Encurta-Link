
import axios from 'axios';

export const key = "f0c84e52922b765afcffa54cf0c20b364f389f40";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
