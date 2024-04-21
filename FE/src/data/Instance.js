import axios from "axios";
let token 
if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
}
const instance = axios.create({
   
    baseURL: '/api',
    headers: {
        Authorization: `Bearer ${token}`,
    },
    // .. other options
});

export default instance;

// Example usage
