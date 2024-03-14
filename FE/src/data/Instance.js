import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3333/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,

    },
    // .. other options
});

export default instance;