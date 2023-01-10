import axios from 'axios';

const http = axios.create({
    baseURL: "http://laravel.shop.com",
    headers: {
        "Content-type": "application/json"
     }
});

export default http;